import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    id: string;
    fullname:string,
  }
  
  interface Session {
    user: User & {
      username: string;
      id: string;
      fullname:string,
    };
    token: {
      username: string;
      id: string;
      fullname:string,
    };
  }
}
