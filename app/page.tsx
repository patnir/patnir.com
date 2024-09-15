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
    title: "Founding Engineer",
    description: "Personal website of Rahul Patni",
    images: ["/static/images/logo.png"],
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
        <p className="py-4">I write about engineering at startups on my <a href="https://foundingengineer.substack.com" target="_blank" className="text-blue-600">Substack</a>.</p>
        <p className="pb-4">
          <a href="https://www.x.com/iAmRahulPatni/" target="_blank" className="text-blue-600">Twitter</a> is the best place for us to connect.
        </p>
        <p>
          I live in Seattle. I work at <a href="https://ironfish.network" target="_blank" className="text-blue-600">Ironfish</a>. Previously, I worked at <a href="https://atomic.vc" target="_blank" className="text-blue-600">Atomic</a>, <a href="https://ridgelineapps.com" target="_blank" className="text-blue-600">Ridgeline</a>, and Microsoft.
        </p>
      </div>
    </div>
  );
}
