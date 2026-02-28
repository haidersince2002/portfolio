import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haider Ali | Full Stack Developer & AI Integrator",
  description:
    "Full-stack developer with expertise in MERN/Next.js stack and AI integration. Built 3+ production-ready applications with focus on real-time systems, scalability, and modern web architectures.",
  keywords: [
    "Haider Ali",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "MERN Stack",
    "AI Integration",
    "Node.js",
    "MongoDB",
    "Web Developer Portfolio",
    "Gemini API",
  ],
  authors: [{ name: "Haider Ali" }],
  openGraph: {
    title: "Haider Ali | Full Stack Developer & AI Integrator",
    description:
      "Full-stack developer with expertise in MERN/Next.js stack and AI integration. Built 3+ production-ready applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haider Ali | Full Stack Developer & AI Integrator",
    description:
      "Full-stack developer with expertise in MERN/Next.js stack and AI integration. Built 3+ production-ready applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}
