import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={`flex flex-col gap-16 ${inter.className}`}>
        <Header />

        {children}

        <div className="absolute z-[-1] w-full h-full">
          <Image
            src="/bg-main.jpg"
            alt="Background"
            sizes="100vw"
            quality={100}
            fill
          />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
