import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khaled Mustafa — Senior Backend Engineer",
  description:
    "Senior Backend Engineer based in Cairo, Egypt. I build scalable Rails systems, open-source gems, and AI-integrated products.",
  keywords: ["Ruby on Rails", "Backend Engineer", "Cairo", "Egypt", "Next.js", "Open Source"],
  openGraph: {
    title: "Khaled Mustafa — Senior Backend Engineer",
    description:
      "Senior Backend Engineer based in Cairo, Egypt. I build scalable Rails systems, open-source gems, and AI-integrated products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
