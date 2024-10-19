import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/sectiontitle";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { prisma } from "@/lib/prisma";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import AuthButton from "@/components/authbutton";
import SignOutButton from "@/components/signoutbutton";
import { useToast } from "@/hooks/use-toast";

interface GuestbookMessage {
  message: string;
  username: string;
  postedAt: Date;
}

export default async function Guestbook() {
  const session = await getServerSession(authOptions);
  const messages = await prisma.guests.findMany({
    orderBy: {
      postedAt: "desc",
    },
  });

  async function submitAction(formData: FormData) {
    "use server";
    const message = formData.get("message")?.toString() as string;
    if (
      message === "" ||
      message.length === 0 ||
      message.length <= 3 ||
      message.length > 180
    ) {
      return;
    }
    const messageSent = await prisma.guests.create({
      data: {
        content: formData.get("message")?.toString() as string,
        username: session?.user?.name as string,
        email: session?.user?.email as string,
        postedAt: new Date(),
      },
    });
    revalidatePath("/guestbook");
  }

  return (
    <>
      <Hero>Guestbook</Hero>
      <div className="mx-[15px] my-[25px]">
        <p className="text-neutral-300 ">
          This is a guest book as you can see. You can leave your message here
          if you wish. Authorization with GitHub is required.
        </p>

        {!session ? (
          <AuthButton />
        ) : (
          <>
            <form action={submitAction} className="mt-4 flex gap-2">
              <Input
                placeholder="Your message here..."
                name="message"
                className="w-full text-neutral-50"
              />
              <Button type="submit">Post</Button>
            </form>

            <SignOutButton />
          </>
        )}
      </div>
      <div className="mx-[15px] my-[25px]">
        <SectionTitle>Messages</SectionTitle>

        {messages.map((message) => (
          <GuestbookEntry
            key={message.id}
            message={message.content}
            username={message.username}
            postedAt={message.postedAt}
          />
        ))}
      </div>
    </>
  );
}

async function GuestbookEntry({
  message,
  username,
  postedAt,
}: GuestbookMessage) {
  return (
    <div className="flex flex-col my-3 w-full bg-neutral-900 p-2 rounded-lg">
      <p className="text-neutral-300 font-josefin">
        {username} -{" "}
        {formatDistanceToNow(postedAt, { addSuffix: true, locale: enUS })}
      </p>
      <p className="text-neutral-50">{message}</p>
    </div>
  );
}
