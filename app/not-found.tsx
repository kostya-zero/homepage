import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konstatin Zero",
  description: "Page not found!",
};

export default function NotFound() {
  return (
    <>
      <p className="text-7xl font-bold font-josefin text-center leading-[1.0] mt-7 text-neutral-50">
        404
      </p>
      <p className="text-center italic mb-7 text-neutral-300">
        You weren&apos;t supposed to be here...
      </p>
    </>
  );
}

