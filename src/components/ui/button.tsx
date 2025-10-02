import React, { type ButtonHTMLAttributes } from "react"
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
        "flex items-center text-gray-200 justify-center gap-2 px-4 py-2 bg-gray-800 border-2 border-gray-700 rounded-md text-center hover:border-gray-600 hover:text-gray-50 hover:bg-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
