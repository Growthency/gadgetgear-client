import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          
          const res = await fetch(
            `https://gadgetgear-server-beta.vercel.app/user/${credentials.email}`,
            {
              cache: "no-store",
            }
          );
          const user = await res.json();

          
          if (user) {
            return {
              id: user._id,
              name: user.name,
              email: user.email,
              image: user.image, 
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
  ],
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.picture = user.image; 
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.image = token.picture; 
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
