import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konstatin Zero",
  description: "My own homepage website.",
};

export default function Home() {
  return (
    <>
      <div className="m-[16px]">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold font-worksans leading-[1.2]">Welcome</h2>
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/89439507" alt="@kostya_zero" />
            <AvatarFallback>KZ</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">This is my own homepage. Glad to see you!</p>
      </div>
      
      <div className="m-[16px]">
        <h2 className="text-2xl font-semibold font-worksans leading-[1.2]">About me</h2>
        <p className="text-neutral-700 dark:text-neutral-300">Hello! My name is <b>Kostya</b>. I am 18 years old and a high school student, system administrator, and indie developer. I use Rust as my primary programming language to build software and Python for scripts and automation tasks. I work alone, handling design, concepts, and coding by myself.</p>
      </div>

      <div className="m-[16px]">
        <h2 className="text-2xl font-semibold font-worksans leading-[1.2]">Website</h2>
        <p className="text-neutral-700 dark:text-neutral-300">I am working on my website at this moment by trying to use different design concepts, language etc. This is not a final version, so you can consider this website as early access.</p>
      </div>
    </>
  );
}
