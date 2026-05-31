import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "text-sm shrink-0 cursor-default justify-center font-medium inline-flex rounded-lg items-center transition-colors",
    {
        variants: {
            variant: {
                default:
                    "text-custom-white bg-background border border-border hover:bg-background-highlight hover:border-border-highlight",
            },
            size: {
                default: "h-10 gap-2 px-3 py-2",
                icon: "size-10",
            },
        },
        defaultVariants: {
            size: "default",
            variant: "default",
        },
    }
);

function Button({
    className,
    size = "default",
    variant = "default",
    ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
    return <button className={cn(buttonVariants({ size, variant, className }))} {...props} />;
}

export default Button;
