import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-semibold uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-or/40 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        noir: 'bg-noir text-lait hover:bg-or',
        or: 'bg-or text-lait hover:bg-noir',
        lait: 'bg-lait text-noir hover:bg-sable',
        outline: 'border border-or text-or hover:bg-or hover:text-lait',
        ghost: 'text-or hover:text-noir',
      },
      size: {
        default: 'px-8 py-4 text-[13px] tracking-[0.14em]',
        lg: 'px-11 py-[18px] text-sm tracking-[0.14em]',
        sm: 'px-5 py-2.5 text-[11px] tracking-[0.14em]',
      },
    },
    defaultVariants: { variant: 'noir', size: 'default' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
