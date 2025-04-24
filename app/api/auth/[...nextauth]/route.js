import NextAuth from "next-auth";
// import AppleProvider from 'next-auth/providers/apple';
// import FacebookProvider from 'next-auth/providers/facebook';
// import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from "next-auth/providers/github";
// import clientPromise from "@/lib/mongodb"


export const authOptions = NextAuth({
    providers: [
      // OAuth authentication providers..
        GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        }),
      // AppleProvider({
      //   clientId: process.env.APPLE_ID,
      //   clientSecret: process.env.APPLE_SECRET
      // }),
      // FacebookProvider({
      //   clientId: process.env.FACEBOOK_ID,
      //   clientSecret: process.env.FACEBOOK_SECRET
      // }),
      // GoogleProvider({
      //   clientId: process.env.GOOGLE_ID,
      //   clientSecret: process.env.GOOGLE_SECRET
      // }),
    
      // EmailProvider({
      //   server: process.env.MAIL_SERVER,
      //   from: 'NextAuth.js <no-reply@example.com>'
      // }),
    ],

    // callbacks: {
    //   async redirect({ url, baseUrl }) {
    //     // Allow redirects to /generate with handle parameter
    //     if (url.startsWith(baseUrl)) return url;
    //     return baseUrl;
    //   },
    // },
      
  })

  export {authOptions as GET , authOptions as POST}
