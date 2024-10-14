"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.01"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <nav className="border-b-[1px] border-[#eee] lg:hidden">
          <div className="max-w-2xl mx-auto flex justify-center text-[12px]">
            <Link
              href="/ae"
              className={`w-1/2 text-center py-[10px] border-0 ${
                pathname === "/ae" ? "text-black" : "text-gray-400"
              }`}
            >
              acoustoelectric
            </Link>
            <Link
              href="/fus"
              className={`w-1/2 text-center py-[10px] border-0 ${
                pathname === "/fus" ? "text-black" : "text-gray-400"
              }`}
            >
              functional ultrasound
            </Link>
          </div>
        </nav>
        <div className="max-w-2xl mx-auto mt-16 lg:mt-24 mb-36 px-4 overflow-clip lg:overflow-visible relative">
          <div className="hidden antialiased lg:visible absolute lg:flex left-[-220px] top-[10px] h-full w-[200px] flex-col text-[#666] justify-start">
            <Link href="/ae" className={`w-full py-2 border-b-0`}>
              <span
                className={`mr-2 text-[18px] ${
                  pathname === "/ae" ? "text-black" : "text-transparent"
                }`}
              >
                •
              </span>
              acoustoelectric
            </Link>
            <Link href="/fus" className={`w-full py-2 border-b-0`}>
              <span
                className={`mr-2 text-[18px] ${
                  pathname === "/fus" ? "text-black" : "text-transparent"
                }`}
              >
                •
              </span>
              functional ultrasound
            </Link>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
