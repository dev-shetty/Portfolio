import { cn } from "@/lib/helpers"
import { HTMLAttributes } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function H1({ children, className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl border-b pb-2 mb-2 border-b-slate-700 font-bold",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export function H2({ children, className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl border-b border-b-slate-700 pb-2 mb-4 font-extrabold",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export function H3({ children, className, ...props }: HeadingProps) {
  return (
    <h3 className={cn("text-xl md:text-2xl", className)} {...props}>
      {children}
    </h3>
  )
}
