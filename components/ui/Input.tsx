import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          className={cn(
            "w-full bg-transparent border-b border-white/50 pb-4 pl-4 pr-8 text-white placeholder:text-white/50 text-[15px] leading-[26px] outline-none focus:border-white transition-colors",
            error && "border-peach focus:border-peach",
            className
          )}
          {...props}
        />
        {error && (
          <div className="absolute right-0 bottom-4 flex items-center gap-2 text-white text-[12px] italic">
            <span>{error}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/contact/desktop/icon-error.svg" alt="" width={20} height={20} />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
