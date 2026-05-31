export default function MainContent({ children }: { children: React.ReactNode }) {
    return <main className="flex flex-col gap-4 mx-6 md:mx-4">{children}</main>;
}
