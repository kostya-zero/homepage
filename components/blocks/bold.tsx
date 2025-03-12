import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Bold({ children }: Props) {
  return <b className="font-semibold">{children}</b>;
}
