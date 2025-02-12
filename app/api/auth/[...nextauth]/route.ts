import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";


export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // Sign in with passwordless email link
    // EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: "<no-reply@example.com>",
    // }),
  ]
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
