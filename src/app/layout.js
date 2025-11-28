import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "react-hot-toast";
// ইম্পোর্ট করো
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GadgetGear",
  description: "Best Tech Products Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar /> {/* Navbar বসলো */}
          <div className="min-h-screen">{children}</div>
          <Footer /> {/* Footer বসলো */}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
