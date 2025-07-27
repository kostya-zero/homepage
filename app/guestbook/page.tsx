import Hero from "@/components/blocks/hero";
import { SectionTitle } from "@/components/blocks/sectiontitle";
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
import { Metadata } from "next";
import MainContent from "@/components/blocks/maincontent";
import BlurOutAnimation from "@/components/bluroutanimation";
import Text from "@/components/blocks/text";

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Guestbook for visitors.",
};

interface GuestbookMessage {
  message: string;
  username: string;
  postedAt: Date;
}

type GuestbookDBEntry = {
  id: number;
  email: string;
  content: string;
  postedAt: Date;
  username: string;
};

export default async function Guestbook() {
  const session = await getServerSession(authOptions);
  // For testing purposes
  // const session = {
  //   user: {
  //     name: "Konstantin",
  //     email: "zero@kostyazero.com",
  //   },
  // };
  const messages: Array<GuestbookDBEntry> = await prisma.guests.findMany({
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
    await prisma.guests.create({
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
    <MainContent>
      <BlurOutAnimation index={0}>
        <Hero>Guestbook</Hero>
      </BlurOutAnimation>

      <div>
        <BlurOutAnimation index={1}>
          <Text>
            This is a guest book as you can see. You can leave your message here
            if you wish. Authorization with GitHub is required.
          </Text>
        </BlurOutAnimation>

        <BlurOutAnimation index={2}>
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
        </BlurOutAnimation>
      </div>
      <div>
        <BlurOutAnimation index={3}>
          <SectionTitle>Messages</SectionTitle>
        </BlurOutAnimation>

        {messages.map((message, index) => (
          <BlurOutAnimation index={index + 3} key={message.id}>
            <GuestbookEntry
              message={message.content}
              username={message.username}
              postedAt={message.postedAt}
            />
          </BlurOutAnimation>
        ))}
      </div>
    </MainContent>
  );
}

async function GuestbookEntry({
  message,
  username,
  postedAt,
}: GuestbookMessage) {
  return (
    <div className="flex flex-col my-3 w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg">
      <p className="text-neutral-400">
        {username}
        <span className="text-neutral-500 ml-1.5 font-light">
          {formatDistanceToNow(postedAt, { addSuffix: true, locale: enUS })}
        </span>
      </p>
      <p className="text-neutral-50 font-geist font-medium">{message}</p>
    </div>
  );
}
