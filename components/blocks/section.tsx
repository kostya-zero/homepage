import { cn } from "@/lib/utils";

type Props = {
    label?: React.ReactNode;
    className?: string;
    children: React.ReactNode;
};

export default function Section({ label, className, children }: Props) {
    return (
        <section className={cn("ticks relative flex flex-col gap-4 border-t px-6 py-8", className)}>
            {label && (
                <span className="text-left font-mono text-xs uppercase tracking-wide text-foreground-muted">
                    {label}
                </span>
            )}
            {children}
        </section>
    );
}
