export default async function Text({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="font-inter text-neutral-300">{children}</p>;
}
