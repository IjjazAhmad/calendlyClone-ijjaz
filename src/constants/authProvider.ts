import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/config/prisma";
import { compare } from "bcrypt";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const existingUser = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!existingUser) {
          return null;
        }
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );
        if (!passwordMatch) {
          return null;
        }
        return {
          id: existingUser.id,
          email: existingUser.email,
          username: existingUser.username,
          fullname: existingUser.fullname,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, username: user.username, id: user.id, fullname:user.fullname};
      }
      return token;
    },

    async session({ session, token }) {
      if (token && token.username) {
        return {
          ...session,
          user: {
            ...session.user,
            username: token.username,
            id: token.id,
            fullname:token.fullname
          },
        };
      }
      return session;
    },
  },
};
