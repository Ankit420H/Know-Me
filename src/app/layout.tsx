import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankit Kumar Yadav | Full-Stack Developer",
  description: "Full-stack engineer focused on fast, scalable, and intelligent digital systems.",
  keywords: ["Full-Stack Developer", "Robotics", "AI", "React", "Next.js", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
