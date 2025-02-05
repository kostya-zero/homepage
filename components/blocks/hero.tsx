interface Props {
  children: string;
}

export const Hero = ({ children }: Props) => (
  <p className="text-4xl font-bold mt-4 text-neutral-50 font-funnel leading-[1.1]">
    {children}
  </p>
);
