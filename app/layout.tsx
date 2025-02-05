import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WishlistProvider } from "@/context/WishlistContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Travel",
    description: "Travel App for Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <WishlistProvider>
            <html lang='en'>
                <body>
                    <Navbar />
                    <main className='relative'>{children}</main>
                    <Footer />
                </body>
            </html>
        </WishlistProvider>
    );
}
