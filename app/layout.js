import "./globals.css";

import { Toaster } from "react-hot-toast";
import "react-responsive-modal/styles.css";

import { Oswald } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const oswald = Oswald({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "iContact",
    description: "An online platform to manage your contacts",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={oswald.className}>
                <Navbar></Navbar>
                {children}
                <Toaster position="top-center" />
            </body>
        </html>
    );
}
