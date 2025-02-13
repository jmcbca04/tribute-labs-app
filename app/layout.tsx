import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "SmartChain Agreements",
  description: "Generate and deploy legal agreements as smart contracts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className="min-h-screen bg-[#0A0B0D]">
          <nav className="bg-[#13141A] border-b border-[#2D2F36]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link
                    href="/"
                    className="flex items-center px-2 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500"
                  >
                    <span className="text-xl font-bold">SmartChain Agreements</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Link
                    href="/templates"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                  >
                    Create Agreement
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
