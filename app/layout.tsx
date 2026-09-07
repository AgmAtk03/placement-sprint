import type { Metadata } from "next";
import { Fraunces, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Placement Sprint — your season starts in 14 days",
    template: "%s · Placement Sprint",
  },
  description:
    "Your placement season starts in 14 days — not “someday.” CSE/BCA/BBA sem 6–8. First 20 at ₹3999. Starter Kit ₹499. Sprint+ ₹7999.",
  openGraph: {
    title: "Your placement season starts in 14 days — not “someday.”",
    description:
      "CSE/BCA/BBA sem 6–8 — resume, LinkedIn, 2 mocks, applications checklist. First 20 at ₹3999. DM SPRINT.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${outfit.variable} ${display.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
