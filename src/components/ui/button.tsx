import React, { ButtonHTMLAttributes } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/helpers"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  children: React.ReactNode
}

export default function Button({
  children,
  asChild = false,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        "flex items-center justify-center gap-2 px-4 py-1 bg-slate-800 rounded-md w-12 md:w-32 text-center hover:bg-slate-700 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
