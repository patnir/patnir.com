import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founding Engineer",
  description: "Personal website of Rahul Patni",
  manifest: "/static/favicons/site.webmanifest",
  applicationName: "Founding Engineer",
  authors: [{ name: "Rahul Patni", url: "https://x.com/iAmRahulPatni" }],
  keywords: ["Rahul Patni", "Founding Engineer", "Startups", "Startup", "Early Stage"],
  category: "Engineering",
  openGraph: {
    title: "Founding Engineer: Tech Startups from the Inside",
    description: "Startup engineering is a discipline without a textbook. It should have one. Written by Rahul Patni.",
    images: ["/static/images/banner.png"],
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/static/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/static/favicons/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/static/favicons/apple-touch-icon.png",
    },
  ],
};

export default function Home() {
  return (
    <div className="container relative">
      <div className="pr-4">
        <p>
          I live in Seattle. I work at Coinbase. I joined via acquisition when I worked at <a href="https://www.coinbase.com/blog/Coinbase-acquires-team-to-accelerate-privacy-efforts-on-Base" target="_blank" className="text-blue-600">Iron Fish</a> (backed by a16z, sequoia). Previously, I worked at <a href="https://atomic.vc" target="_blank" className="text-blue-600">Atomic</a>, <a href="https://ridgelineapps.com" target="_blank" className="text-blue-600">Ridgeline</a>, and Microsoft.
        </p>
        <p className="py-2">I write about engineering at startups on my <a href="https://blog.foundingengineer.com" target="_blank" className="text-blue-600">blog</a>.</p>
        <p className="pb-2">
          I'd love to chat! Feel free to reach out on <a href="https://www.x.com/iAmRahulPatni/" target="_blank" className="text-blue-600">Twitter</a>.
        </p>
      </div>
    </div>
  );
}
