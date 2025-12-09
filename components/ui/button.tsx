import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Button({ className, ...props }: ComponentProps<"button">) {
    return (
        <button
            className={cn(
                "text-white flex text-sm cursor-pointer flex-row gap-2 px-3 py-2 rounded-lg items-center border border-border  bg-background hover:bg-background-highlight hover:border-border-highlight transition-colors ",
                className
            )}
            {...props}
        />
    );
}

export default Button;
