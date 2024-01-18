import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
export const authOption = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/home/user",
  },
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
