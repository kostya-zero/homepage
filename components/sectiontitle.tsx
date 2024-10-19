interface Props {
  children: string;
}

export const SectionTitle = ({ children }: Props) => (
  <h2 className="text-2xl font-semibold font-josefin leading-[1.2] text-neutral-50 mb-4">
    {children}
  </h2>
);
