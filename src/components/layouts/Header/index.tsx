"use client";
import Image from "next/image";
import ThemeToggle from "@/components/apps/ThemeToggle";
import TransitionLink from "@/components/transition-link";
import { iconNavsConfig, navsConfig } from "@/configs/navs.config";
import React from "react";
import { useTransitionRouter, Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { signIn } from "next-auth/react";
const Header = () => {
  const pathname = usePathname();
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
    <div className=" bg-white rounded-b-[18px]">
      <div className="max-w-xl mx-auto px-[15px] py-[12px] flex justify-between">
        <Link
          href="/"
          className="relative flex items-center font-semibold text-[22px] text-[#192025]"
        >
          <Image
            src="/assets/images/avatar.png"
            alt=""
            width={400}
            height={400}
            className="mr-[12px] border-[2px] size-[60px]  object-contain border-white rounded-full "
          />
          TuanAnh Notebook
        </Link>
        {/* <button
          onClick={() => signIn()}
          className="shadow-primary  rounded-xl bg-white border-0 text-black text-[18px] active:scale-[0.99]"
        >
          Sign In FB Dev
        </button> */}
        {/* <ul className="flex items-center gap-x-[20px]">
          {navsConfig.map((nav) => {
            const isActive = pathname === nav.href;
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
                  className={`${isActive ? "text-primary font-semibold border-b-[2px] border-primary" : "text-textColor hover:text-black dark:hover:text-white  opacity-[0.7]"} group relative  text-[16.5px]  group-hover:opacity-100 transition-colors duration-[200ms]`}
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

          <li>
            <ThemeToggle />
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Header;
