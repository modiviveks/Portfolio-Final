import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivek Modi | Portfolio",
  description: "Electronics and Communication Engineering student building web apps, AI-driven tools, and efficient software systems.",
  keywords: ["Vivek Modi", "Portfolio", "Web Developer", "MERN Stack", "AI", "Machine Learning"],
  authors: [{ name: "Vivek Modi" }],
  openGraph: {
    title: "Vivek Modi | Portfolio",
    description: "Electronics and Communication Engineering student building web apps, AI-driven tools, and efficient software systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
