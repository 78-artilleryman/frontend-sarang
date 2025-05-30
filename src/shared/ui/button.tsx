import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/utils/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        square: "text-gray-0 bg-gray-900 text-xs font-medium",
        calendar: "rounded-2xl bg-gray-50 text-base font-normal text-gray-400 gap-1",
        submit: "bg-green-500 text-white hover:bg-green-600",
        inactive: "bg-gray-200 text-gray-0",
        active: "bg-green-500 text-gray-0",
        pressed: "bg-green-600 text-gray-0",
        special: "bg-green-100 text-green-500",
        login: "bg-[#FEE500] text-gray-1000",
        delete: "bg-green-100 text-white hover:bg-green-200 text-green-500",
      },
      size: {
        onicon: "w-full h-[56px] font-semibold text-xl",
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        "2xs": "px-2 py-1",
        xs: "px-3 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-14 py-4.5 rounded-2xl text-xl",
        icon: "w-12 h-12",
        sIcon: "w-7 h-7",
        "2xsIcon": "w-5 h-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
