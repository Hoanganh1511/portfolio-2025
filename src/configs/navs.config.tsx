import { AiOutlineYoutube } from "react-icons/ai";
import { LuGithub } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaThreads, FaInstagram, FaYoutube } from "react-icons/fa6";
export const navsConfig = [
  {
    id: 1,
    text: "Blog",
    href: "/blog",
  },
  {
    id: 2,
    text: "Projects",
    href: "/projects",
  },
  {
    id: 3,
    text: "Photos",
    href: "/blog",
  },
];

export const iconNavsConfig = [
  {
    id: 1,
    alt: "Blog",
    href: "/youtube",
    icon: AiOutlineYoutube,
  },
  {
    id: 2,
    alt: "Projects",
    href: "/github",
    icon: LuGithub,
  },
];
export const socialsConfig = [
  {
    id: 1,
    text: "GitHub",
    href: "/",
    icon: FaGithub,
  },

  {
    id: 2,
    text: "Threads",
    href: "/",
    icon: FaThreads,
  },
  {
    id: 3,
    text: "Instagram",
    href: "/",
    icon: FaInstagram,
  },
  {
    id: 4,
    text: "YouTube",
    href: "/",
    icon: FaYoutube,
  },
];
