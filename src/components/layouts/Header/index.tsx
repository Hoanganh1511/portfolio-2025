import ThemeToggle from "@/components/apps/ThemeToggle";
import { iconNavsConfig, navsConfig } from "@/configs/navs.config";
import Link from "next/link";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
const Header = () => {
  return (
    <div className="p-[32px]">
      <div className="flex justify-between">
        <Link
          href="/"
          className="relative font-allura text-[32px] text-textColor"
        >
          Tuấn
          <span className="absolute top-[40%] left-[65%]">Ah</span>
        </Link>
        <ul className="flex items-center gap-x-[20px]">
          {navsConfig.map((nav) => {
            return (
              <li key={nav.id}>
                <Link
                  href={nav.href}
                  className="group relative text-textColor text-[16.5px] hover:text-black dark:hover:text-white opacity-[0.6] group-hover:opacity-100 transition-colors duration-[200ms]"
                >
                  {nav.text}
                  <span
                    className={`opacity-0 group-hover:opacity-100 absolute w-full h-[4px] top-1/2 -translate-y-1/2 left-0 bg-black/30 blur-[12px] z-[-1]`}
                  />
                </Link>
              </li>
            );
          })}
          {iconNavsConfig.map((iconNav) => {
            return (
              <li key={iconNav.id}>
                <Link
                  href={iconNav.href}
                  className="opacity-[0.6] hover:opacity-100 duration-200 cursor-pointer"
                >
                  <iconNav.icon className="text-[20px] text-textColor" />
                </Link>
              </li>
            );
          })}
          {/* <li>
            <AiOutlineYoutube className="text-[20px] text-textColor opacity-[0.6]" />
          </li>
          <li>
            <LuGithub className="text-[20px] text-textColor  opacity-[0.6]" />
          </li> */}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
