import { cn } from "@/lib/utils";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";

const Menu = ({ children }: { children: React.ReactNode }) => {
    return <MenuPrimitive.Root>{children}</MenuPrimitive.Root>;
};

const MenuTrigger = ({ children, ...props }: React.ComponentProps<MenuPrimitive.Trigger>) => {
    return <MenuPrimitive.Trigger {...props}>{children}</MenuPrimitive.Trigger>;
};

const MenuContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <MenuPrimitive.Portal>
            <MenuPrimitive.Positioner sideOffset={5}>
                <MenuPrimitive.Popup
                    className={cn(
                        "border border-border select-none p-1 rounded-lg bg-background min-w-[150px] flex flex-col shadow-lg cursor-default",
                        "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95",
                        "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                    )}
                >
                    {children}
                </MenuPrimitive.Popup>
            </MenuPrimitive.Positioner>
        </MenuPrimitive.Portal>
    );
};

const MenuItem = ({ children, className, ...props }: React.ComponentProps<typeof MenuPrimitive.Item>) => {
    return (
        <MenuPrimitive.Item
            className={cn(
                "hover:bg-background-highlight text-custom-white px-2 py-1.5 rounded-lg flex flex-row gap-2 items-center [&_svg:not([class*='size-'])]:size-4.5",
                className
            )}
            {...props}
        >
            {children}
        </MenuPrimitive.Item>
    );
};

export { Menu, MenuTrigger, MenuContent, MenuItem };
