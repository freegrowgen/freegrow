/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { cn } from "@/lib/utils";

interface InputInterface extends React.ComponentProps<"input"> {
  label?: string;
  errorMessage?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputInterface>(
  ({ className, type, label, errorMessage, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 h-16">
        <div>
          <label className="block font-medium mb-1">{label}</label>
          <input
          autoComplete="off"
            ref={ref} // Pass ref here
            type={type}
            data-slot="input"
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              className
            )}
            {...props}
          />
        </div>
        <p className="text-destructive">
          {<label className="">{errorMessage}</label>}
        </p>
      </div>
    );
  }
);

Input.displayName = "Input"; // This is useful for debugging.

export { Input };
