import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yasir Ali | Full Stack Developer",
  icons: {
    icon: [
      "/skills-icons/favicon_io/favicon.ico",
      {
        url: "/skills-icons/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/skills-icons/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/skills-icons/favicon_io/apple-touch-icon.png",
  },
  description:
    "Portfolio of Yasir Ali, a Full Stack Developer with 2 years of experience building production web applications with React.js, Next.js, Node.js, Express, REST APIs, and SQL and NoSQL databases.",
  keywords: [
    "Yasir Ali",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "TypeScript",
    "Portfolio",
    "Web Developer Portfolio"
  ],
  authors: [{ name: "Yasir Ali" }],
  creator: "Yasir Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yasirali.dev",
    title: "Yasir Ali | Full Stack Developer",
    description:
      "Full Stack Developer with 2 years of experience building and shipping end-to-end production web applications.",
    siteName: "Yasir Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasir Ali | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React.js, Next.js, Node.js, TypeScript, and REST APIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
      data-theme="light"
    >
      <body className="min-h-screen bg-[#06070a] text-zinc-100 antialiased selection:bg-[#C0DCBC] selection:text-[#0e0e13]">
        {children}
      </body>
    </html>
  );
}
