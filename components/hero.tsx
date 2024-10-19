interface Props {
  children: string;
}

export const Hero = ({ children }: Props) => (
  <p className="text-4xl mt-[45px] mb-[25px] mx-[15px] font-bold text-neutral-50 font-josefin leading-[1.1] w-[80%] bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#BBBBBB]">
    {children}
  </p>
);
