import { withAuth } from "next-auth/middleware";
export default withAuth(function middleware(req) {}, {
  // callbacks: {
  //   // authorized: ({ token }) => token?.role === "admin",
  // },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  matcher: [
    "/",
    "/profile",
    "/schedulerdetail",
    "/availability",
    "/schedulemeet",
    "/analytics",
    "/setavailability",
  ],
};
