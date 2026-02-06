import { cn } from "@/lib/utils";

type HoverTextProps = {
    children: React.ReactNode;
    className?: string;
};

export default function HoverText({ children, className = "" }: HoverTextProps) {
    return (
        <div
            className={cn(
                "relative hover:text-custom-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-custom-white before:origin-center before:h-px before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-custom-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]",
                className
            )}
        >
            <span>{children}</span>
        </div>
    );
}
