"use client";

import { FaStar } from "react-icons/fa";
import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";

export default function ProjectCard(props: any) {
  const [stars, setStars] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const repo_link = "https://github.com/kostya-zero/" + props.reponame;

  useEffect(() => {
    const fetchRepoInfo = async () => {
      const gh = new Octokit();

      try {
        const { data: repoinfo } = await gh.request(
          "GET /repos/{owner}/{repo}",
          {
            owner: "kostya-zero",
            repo: props.reponame,
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          },
        );

        setStars(repoinfo.stargazers_count);
        setLastUpdated(new Date(repoinfo.updated_at));
      } catch (error) {
        console.error("Error fetching repo info:", error);
      }
    };

    fetchRepoInfo();
  }, [props.reponame]);

  return (
    <>
      <div>
        <Link href={repo_link}>
          <div className=" cursor-pointer items-center text-[] justify-between m-4 p-[1.25rem] rounded-md bg-[#FFFFFF] border border-[#D9D9D9] scale-100 transition-all duration-200 hover:bg-[#F1F1F1] hover:border-[#565656] hover:scale-[1.03] dark:bg-[#232323] dark:border-[#494949] dark:hover:bg-[#464646] dark:hover:border-[#999999]">
            <div className="flex items-center justify-between ">
              <p className="mr-2 font-semibold text-2xl font-worksans">
                {props.name}
              </p>
              <div className=" items-center flex text-md text-neutral-700 dark:text-neutral-300">
                <p>
                  Updated{" "}
                  {formatDistanceToNow(lastUpdated, {
                    addSuffix: true,
                    locale: enUS,
                  })}
                </p>
                <FaStar className="ml-2 mr-1" />
                <p>{stars}</p>
              </div>
            </div>
            <p className="text-md text-neutral-700 dark:text-neutral-300">
              {props.desc}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
