const siteConfig = {
  name: "Rahul Patni",
  url: "https://foundingengineer.com",
  description:
    "I believe in small but mighty engineering teams.",
  links: {
    linkedin: "https://www.linkedin.com/in/rahulpatni/ ",
    github: "https://github.com/patnir",
    twitter: "https://www.x.com/iAmRahulPatni",
  },
}

export function SiteFooter() {
  return (
    <footer className="py-6">
      <div className="container flex items-center gap-4">
        <p className="text-balance text-left text-sm leading-loose text-muted-foreground">
          You can find all of my work on{" "}
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