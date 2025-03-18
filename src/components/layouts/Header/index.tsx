"use client";
import ThemeToggle from "@/components/apps/ThemeToggle";
import TransitionLink from "@/components/transition-link";
import { iconNavsConfig, navsConfig } from "@/configs/navs.config";
import React from "react";
import { useTransitionRouter, Link } from "next-view-transitions";
const Header = () => {
  const router = useTransitionRouter();
  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateX(0)",
        },
        {
          opacity: 0.2,
          transform: "translateX(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0%, 100%, 100%, 100%, 100%, 100%, 0%, 100%)",
        },
        {
          clipPath: "polygon(0%, 100%, 100%, 100%, 100%,  0%, 0%,0%,)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }
  return (
    <div className="p-[32px]">
      <div className="flex justify-between">
        <Link
          href="/"
          className="relative font-allura text-[32px] text-textColor"
        >
          Tuấn Anh
          <span className="absolute top-[40%] left-[65%]"></span>
        </Link>
        <ul className="flex items-center gap-x-[20px]">
          {navsConfig.map((nav) => {
            return (
              <li key={nav.id}>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(nav.href, {
                      onTransitionReady: slideInOut,
                    });
                  }}
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
