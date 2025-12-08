export default function Hero({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-4xl font-bold mt-4 font-funnel leading-[1.1] bg-linear-to-b from-white to-neutral-300 bg-clip-text text-transparent">
            {children}
        </p>
    );
}
