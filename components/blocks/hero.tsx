interface Props {
    children: string;
}

export default function Hero({ children }: Props) {
    return (
        <p className="text-4xl font-bold mt-4 font-funnel leading-[1.1] bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent">
            {children}
        </p>
    );
}
