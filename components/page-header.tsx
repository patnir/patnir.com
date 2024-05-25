import { cn } from "@/lib/utils"
import Link from "next/link"
import Balance from "react-wrap-balancer"
import { ModeToggle } from "./mode-toggle"

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header className="py-6">
      <div className="container flex flex-col items-center justify-between gap-4">
        <div className="flex flex-row items-center justify-between w-full">
          <Link href="/">
            <PageHeaderHeading className="hover:cursor-pointer">Rahul Patni</PageHeaderHeading></Link>
          <ModeToggle />
        </div>
        {children}
      </div>
    </header>
  )
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div>
      <h1
        className={cn(
          "text-center text-xl text-black font-bold leading-tight tracking-tighter md:text-xl lg:leading-[1.1]",
          className
        )}

        {...props}
      />
    </div>
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        "max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl",
        className
      )}
      {...props}
    />
  )
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center space-x-4 py-4 md:pb-10",
        className
      )}
      {...props}
    />
  )
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading }
