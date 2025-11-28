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
          // ১. আমাদের সার্ভার থেকে আসল ইউজার খুঁজে বের করা
          const res = await fetch(
            `https://gadgetgear-server-beta.vercel.app/user/${credentials.email}`,
            {
              cache: "no-store",
            }
          );
          const user = await res.json();

          // ২. যদি ইউজার পাওয়া যায়, তাহলে তার আসল তথ্য রিটার্ন করো
          if (user) {
            return {
              id: user._id,
              name: user.name,
              email: user.email,
              image: user.image, // <--- এই যে তোমার আসল ছবি!
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
  // ৩. সেশন এর মধ্যে ডেটা পাস করা (Callback)
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.picture = user.image; // টোকেনে ছবি ঢুকালাম
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.image = token.picture; // সেশনে ছবি সেট করলাম
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
