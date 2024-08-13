import type { Metadata } from "next";
import { Work_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "@/scss/global.scss";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import Footer from "@/components/footer";
import { baseUrl } from "./sitemap";

const workSans = Work_Sans({ subsets: ["latin"] });
const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "500", variable: "--jakarta-Sans" });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Sky Enterprise",
    template: "%s | Sky Enterprise",
  },
  description: "WordPress to NextJS Conversion Starter Package.",
  openGraph: {
    title: "Sky Enterprise",
    description: "WordPress to NextJS Conversion Starter Package.",
    url: baseUrl,
    siteName: "Sky Enterprise",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={cx("text-black bg-white    text-sm ", workSans.className)}>
        <main>
          <div className="min-h-[80vh]">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
