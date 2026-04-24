import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg px-6 py-[18px] text-[15px] font-medium uppercase tracking-[1px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        peach:
          "bg-peach text-white hover:bg-light-peach focus-visible:ring-peach",
        dark: "bg-dark-grey text-white hover:bg-dark focus-visible:ring-dark-grey",
        white:
          "bg-white text-dark-grey hover:bg-light-grey focus-visible:ring-white",
        "light-peach":
          "bg-light-peach text-white hover:bg-peach focus-visible:ring-light-peach",
      },
    },
    defaultVariants: {
      variant: "peach",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}
