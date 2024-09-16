import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Rahul Patni",
  description: "Personal website of Rahul Patni",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/static/favicons/favicon-32x32.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} flex flex-col min-h-screen p-4`}>
        <PageHeader />
        <main className="flex-grow">
          <div className="">
            {children}
          </div>
        </main>
        <SiteFooter />
      </body>
    </html >
  );
}
