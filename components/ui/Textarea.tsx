import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          className={cn(
            "w-full bg-transparent border-b border-white/50 pb-4 pl-4 pr-8 text-white placeholder:text-white/50 text-[15px] leading-[26px] outline-none focus:border-white resize-none transition-colors",
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
Textarea.displayName = "Textarea";

export { Textarea };
