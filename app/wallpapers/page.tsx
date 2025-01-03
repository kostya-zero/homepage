import { Hero } from "@/components/blocks/hero";
import HoverText from "@/components/blocks/hovertext";
import SectionWrapper from "@/components/blocks/sectionwrapper";
import Text from "@/components/blocks/text";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wallpapers",
  description: "A collection of my wallpapers",
};

type Wallpaper = {
  name: string;
  imageUrl: string;
  imageSourceUrl: string;
  author: string;
  authorUrl?: string;
};

export default async function Wallpapers() {
  const wallpapers: Wallpaper[] = [
    {
      name: "Icebergs",
      imageUrl: "/wallpapers/icebergs.jpg",
      imageSourceUrl:
        "https://unsplash.com/photos/glacier-near-body-of-water-vpHCfunwDrQ",
      author: "Emma Francis",
      authorUrl: "https://unsplash.com/@efranciswork",
    },
    {
      name: "Winter Lake",
      imageUrl: "/wallpapers/winter-lake.jpg",
      imageSourceUrl:
        "https://unsplash.com/photos/river-surrounded-by-snow-covered-field-with-pine-trees-MPfv17UJb8w",
      author: "Roberto Nickson",
      authorUrl: "https://unsplash.com/@rpnickson",
    },
    {
      name: "Shrine",
      imageUrl: "/wallpapers/shrine.png",
      imageSourceUrl: "https://wallhaven.cc/w/85mqwy",
      author: "Unknown",
    },
    {
      name: "Starfield",
      imageSourceUrl: "https://basicappleguy.com/basicappleblog/starfield",
      imageUrl: "/wallpapers/starfield.png",
      author: "Basic Apple Guy",
      authorUrl: "https://basicappleguy.com/",
    },
    {
      name: "Dunes",
      imageSourceUrl: "https://wallhaven.cc/w/zxw7gv",
      imageUrl: "/wallpapers/dunes.jpg",
      author: "Unknown",
    },
    {
      name: "Forest",
      imageSourceUrl: "https://wallhaven.cc/w/1pomov",
      imageUrl: "/wallpapers/forest.jpg",
      author: "Unknown",
    },
    {
      name: "River",
      imageSourceUrl:
        "https://unsplash.com/photos/calm-body-of-water-surrounded-by-trees-near-cliff-mWRR1xj95hg",
      imageUrl: "/wallpapers/river.jpg",
      author: "Christian Joudrey",
      authorUrl: "https://unsplash.com/@cjoudrey",
    },
    {
      name: "Beach",
      imageSourceUrl: "https://www.bwallpaperhd.com/mirror-beach.html",
      imageUrl: "/wallpapers/beach.png",
      author: "Bing Search",
    },
  ];
  return (
    <main className="text-neutral-50">
      <Hero>Wallpapers</Hero>
      <SectionWrapper>
        <Text>
          This is a collection of my desktop wallpapers. You can can use them
          freely. The authors of the images are mentioned below the name with a
          link to the source.
        </Text>
      </SectionWrapper>
      <SectionWrapper>
        <div className="w-full mt-6 mb-6 grid grid-cols-2 gap-10">
          {wallpapers.map((wallpaper, index) => (
            <div key={index} className="flex flex-col items-center justify-between">
              <Link
                href={wallpaper.imageUrl}
                target="_blank"
                className="h-[160px] w-full"
              >
                <Image
                  key={wallpaper.name}
                  src={wallpaper.imageUrl}
                  alt={wallpaper.name}
                  width={500}
                  height={200}
                  className="w-full object-cover h-[160px] ease-in-out rounded-lg transition duration-300 hover:scale-105 cursor-pointer hover:shadow-xl"
                />
              </Link>
              <Link href={wallpaper.imageSourceUrl} target="_blank">
                <HoverText className="mt-1 font-funnel text-lg text-neutral-50">
                  {wallpaper.name}
                </HoverText>
              </Link>
              {wallpaper.authorUrl ? (
                <Link href={wallpaper.authorUrl} target="_blank">
                  <HoverText className="text-neutral-500 text-sm">
                    {wallpaper.author}
                  </HoverText>
                </Link>
              ) : (
                <p className="text-neutral-500 text-sm cursor-default">
                  {wallpaper.author}
                </p>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
