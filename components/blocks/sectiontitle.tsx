interface Props {
  children: string;
}

export const SectionTitle = ({ children }: Props) => (
  <h2 className="text-2xl font-semibold font-funnel leading-[1.2] text-neutral-200">
    {children}
  </h2>
);
