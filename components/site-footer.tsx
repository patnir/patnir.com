const siteConfig = {
  name: "Rahul Patni",
  url: "https://patnir.com",
  description:
    "I'm focus on improving engineering outcomes at startups.",
  links: {
    linkedin: "https://www.linkedin.com/in/rahulpatni/ ",
    github: "https://github.com/patnir/patnir.com",
  },
}

export function SiteFooter() {
  return (
    <footer className="py-6">
      <div className="container flex items-center gap-4">
        <p className="text-balance text-left text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            me
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}