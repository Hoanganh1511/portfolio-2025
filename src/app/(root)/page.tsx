"use client";
import Image from "next/image";
import Link from "next/link";
import { FaThreads } from "react-icons/fa6";
import { FaFacebookF, FaPause, FaPlay } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import ShowMore from "@/components/common/ShowMore";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaWifi } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByCategory, getDailyPosts } from "@/services/service-blog";
import { getAccessToken } from "@/lib/spotify";
import SpotifyPlayer from "@/components/common/SpotifyPlayer";
import WorkingEnergy from "@/components/sections/home/WorkingEnergy";
import { IPost } from "@/types/service-api";
import Tooltip from "@/components/common/Tooltip";
import { PortableText } from "next-sanity";
import RichTextComponent from "@/components/rich-text-component";
import PostCard from "@/components/sections/home/PostCard";
import DailyCard from "@/components/sections/home/DailyCard";
export default function Home() {
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
  } = useQuery({
    queryKey: [`tech-posts`],
    queryFn: () =>
      getArticlesByCategory({
        category: "",
        limit: 15,
      }),
    staleTime: 1000 * 60, // Cache for 5 minutes
  });
  const {
    data: dailyPosts,
    isLoading: dailyPostsLoading,
    error: dailyPostsError,
  } = useQuery({
    queryKey: [`daily-posts`],
    queryFn: () => getDailyPosts(),
    staleTime: 1000 * 60, // Cache for 5 minutes
  });
  // {
  //   category: "daily",
  //   limit: 3,
  // }
  console.log("data =>", dailyPosts);
  return (
    <>
      <div className="max-w-xl px-[15px] mx-auto relative h-full grid grid-cols-12 gap-[16px]">
        <div className="col-span-12  flex flex-col gap-y-[16px] h-fit  top-0">
          <div className="px-[24px] py-[24px] h-fit rounded-[16px] bg-white">
            <h3 className="font-semibold mb-[12px]">About</h3>
            <p className="block mb-[20px] text-textColor">
              heya! It&apos;s me , Tuananh Notebook - a{" "}
              <b>Front End Engineer</b> 🖥️
              <br />
              This is my personal page
            </p>
            <div className="mb-[20px] flex items-center text-textColor">
              <span className="mr-[6px]"> Working at </span>
              <TechBadge icon={"/icons/intecom-icon.png"} label="VTC Intecom" />
            </div>

            <ShowMore maxLines={3}>
              <p className=" leading-[1.8rem] text-textColor">
                Creating beautiful, fast websites with an impressive user
                experience for customers is my passion. You can find my full
                projects list{" "}
                <Link
                  href="/projects"
                  className="text-textColor-origin inline-block relative after:absolute after:top-[calc(100%+2px)] after:left-0 after:w-full after:h-[1px] after:duration-500 after:bg-gray-300 hover:after:bg-textColor cursor-pointer"
                >
                  here.
                </Link>{" "}
              </p>
              <p className="pt-[12px] leading-[1.8rem] text-textColor">
                Besides programming, I enjoy vlogging and traveling.
                <br /> You can find some of my videos on{" "}
                <Link
                  href="/projects"
                  className="text-textColor-origin relative after:absolute after:top-[calc(100%+2px)] after:left-0 after:w-full after:h-[1px] after:duration-500 after:bg-gray-300 hover:after:bg-textColor cursor-pointer"
                >
                  this page.
                </Link>{" "}
                <br />
              </p>
              <p className="pt-[12px] leading-[1.8rem] text-textColor">
                I live in Hanoi, so if you&apos;re nearby, feel free to reach
                out—let&apos;s grab a coffee or work together!
              </p>
            </ShowMore>

            <div className="flex items-center">
              <p className="my-[20px] leading-[1.8rem] text-textColor">
                Find me on
              </p>
              <ul className="pl-[12px] flex items-center gap-x-[8px]">
                {/* <Link href="https://www.facebook.com/jm.1511/" target="_blank">
                  <Tooltip tooltipText="jm.1511">
                    <FaFacebookF className=" size-[20px] text-gray-500" />
                  </Tooltip>
                </Link> */}
                <Link
                  href="https://www.instagram.com/hoanganh.ui/"
                  target="_blank"
                >
                  <Tooltip tooltipText="hoanganh.ui">
                    <FaInstagram className=" size-[20px] text-gray-500" />
                  </Tooltip>
                </Link>
                <Link
                  href="https://www.threads.com/@hoanganh.ui"
                  target="_blank"
                >
                  <Tooltip tooltipText="hoanganh.ui">
                    <FaThreads className=" size-[20px] text-gray-500" />
                  </Tooltip>
                </Link>
              </ul>
            </div>
            <div className="mb-[12px] flex items-center flex-wrap gap-x-[8px]">
              {["Web Development", "Writing", "Photography"].map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className="text-[#8a8fa0] text-[12px] font-semibold bg-[#9fa3b114] px-[8px] py-[4px] rounded-[14px]"
                  >
                    {_}
                  </div>
                );
              })}
            </div>
          </div>
          {/* 2 */}
          <div className="px-[24px] py-[24px] h-fit rounded-[16px] bg-white">
            <div className="">
              <div className="mb-[8px] flex items-center flex-wrap text-textColor">
                <h3 className="font-semibold mb-[12px]">🛠️ Expertise</h3>
                <div className="mt-[8px] ml-[6px] inline-flex flex-wrap items-center gap-x-[6px] gap-y-[8px]">
                  <TechBadge icon={"/icons/react-icon.png"} label="React" />
                  <TechBadge icon={"/icons/nextjs-icon.png"} label="Next.js" />
                  <TechBadge icon={"/icons/aws.png"} label="AWS" />
                  <TechBadge icon={"/icons/vite-icon.png"} label="Vite" />
                  <TechBadge icon={"/icons/zustand.webp"} label="Zustand" />
                  <TechBadge icon={"/icons/redux.webp"} label="Redux" />
                  <TechBadge
                    icon={"/icons/typescript.png"}
                    label="TypeScript"
                  />
                  <TechBadge icon={"/icons/nodejs.png"} label="Node.js" />
                  <TechBadge
                    icon={"/icons/express-js.png"}
                    label="Express.js"
                  />
                  <TechBadge icon={"/icons/cursor.webp"} label="Cursor" />
                  <TechBadge icon={"/icons/shadcn.png"} label="Shadcn" />
                  <TechBadge icon={"/icons/mui.png"} label="MUI" />
                  <TechBadge icon={"/icons/tailwind.png"} label="TailwindCSS" />
                  <TechBadge
                    icon={"/icons/styled-components.svg"}
                    label="Styled-components"
                  />
                  <TechBadge icon={"/icons/motion.avif"} label="Motion" />
                  <br />
                  <TechBadge icon={"/icons/graphql.png"} label="GraphQL" />
                </div>
              </div>
            </div>
          </div>

          {/* <p className="my-[20px] leading-[1.8rem] text-textColor">
            Or email me at{" "}
            <span className="font-dm_mono">anhht.fe@gmail.com</span>
          </p> */}
        </div>
        {/* <div className="col-span-4 flex flex-col gap-y-[16px] h-fit">
          <div className="px-[24px] py-[24px]  rounded-[16px] bg-white">
            <h3 className="font-semibold mb-[12px]">Working energy</h3>
            <WorkingEnergy />
          </div>
          <div>
            <h2 className="flex items-center mb-[12px]">
              <Image
                src="/assets/images/avatar-2.webp"
                alt=""
                width={400}
                height={400}
                className="border-[2px] size-[35px]  object-contain border-white rounded-full "
              />
              <span className="pl-[6px] font-semibold"> Tuananh Notebook</span>
            </h2>
            <div className="px-[24px] py-[24px]  rounded-[16px] bg-white">
              <p>
                💖 hello! this is where i post exclusive updates here. feel free
                to look around (i do offer free stuff to here)
              </p>
            </div>
          </div>
          <div className="px-[24px] py-[24px]  rounded-[16px] bg-white">
            <h3 className="font-semibold mb-[12px]">Feed</h3>
            <ul className="flex flex-col gap-y-[30px]">
              {dailyPosts && dailyPosts.data.length > 0 ? (
                dailyPosts.data.map((post: IPost, idx: number) => {
                  return (
                    <div key={post._id}>
                      <h2 className="flex items-center mb-[12px]">
                        <Image
                          src="/assets/images/avatar-2.webp"
                          alt=""
                          width={400}
                          height={400}
                          className="border-[2px] size-[35px]  object-contain border-white rounded-full "
                        />
                        <span className="pl-[6px] font-semibold">
                          {" "}
                          Tuananh Notebook
                        </span>
                      </h2>
                      <div className="block border-[1px] border-[#d4cfcd] rounded-[18px]">
                        <DailyCard data={post} />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center">Daily posts chưa cập nhật</div>
              )}
            </ul>
            {dailyPosts && dailyPosts.data.length > 0 && (
              <Link href="/feed" className="mt-8 block w-fit mx-auto">
                <span className="font-semibold underline">Show all</span>
              </Link>
            )}
          </div>
        </div> */}
        <div className="col-span-12 flex flex-col gap-y-[16px]">
          <div className="px-[24px] py-[24px]  rounded-[16px] bg-white">
            <h3 className="font-bold text-[22px] text-black/90 mb-[12px]">
              Web Developer Blog{" "}
              <FaWifi className="rotate-[45deg] text-primary inline-block" />
            </h3>
            <ul className="grid grid-cols-12 gap-x-[16px] gap-y-[24px]">
              {posts &&
                posts.map((post: IPost, idx: number) => {
                  return (
                    <div key={post._id} className="col-span-4 flex flex-col">
                      <h2 className="flex items-center mb-[12px]">
                        <Image
                          src="/assets/images/avatar-2.webp"
                          alt=""
                          width={400}
                          height={400}
                          className="border-[2px] size-[35px]  object-contain border-white rounded-full "
                        />
                        <span className="pl-[6px] font-semibold">
                          {" "}
                          Tuananh Notebook
                        </span>
                      </h2>
                      <div className="block border-[1px] border-[#d4cfcd] rounded-[12px] flex-1">
                        <PostCard data={post} />
                      </div>
                    </div>
                  );
                })}
            </ul>
            {posts && posts.length > 0 && (
              <Link
                href="/blog"
                scroll={true}
                className="mt-8 block w-fit mx-auto"
              >
                <span className="font-semibold underline">Show all</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

type TechBadgeProps = {
  icon: string;
  label: string;
};

const TechBadge: React.FC<TechBadgeProps> = ({ icon, label }) => {
  return (
    <div className="inline-flex items-center px-[6px] py-[3px] bg-gray-200 rounded-[4px]">
      <Image src={icon} alt={label} width={18} height={18} />
      <span className="pl-[5px] pt-[1px] flex items-center text-[15px]  align-text-top text-black/80 ">
        {label}
      </span>
    </div>
  );
};
