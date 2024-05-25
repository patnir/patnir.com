import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Patni",
  description: "Personal website of Rahul Patni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${inter.className} flex flex-col min-h-screen p-4`}>
          <PageHeader />
          <main className="flex-grow">
            <div className="">
              {children}
            </div>
          </main>
          <SiteFooter />
        </body>
      </ThemeProvider>
    </html >
  );
}
