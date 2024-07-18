import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konstatin Zero",
  description: "I'm a teapot!",
};

export default function Coffee() {
    return (
        <>
            <p className="text-7xl font-bold font-worksans text-center leading-[1.0] mt-7">418</p>
            <p className="text-center italic mb-7">I&apos;m a teapot!</p>
        </>
    )
}