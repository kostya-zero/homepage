import { cn } from "@/lib/utils";

function Input({ className, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            className={cn(
                "px-3 py-2 border rounded-lg focus:outline-2 focus:outline-offset-2 border-border bg-background",
                className
            )}
            {...props}
        />
    );
}

export { Input };
