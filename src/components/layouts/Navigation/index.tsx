"use client";
import Tooltip from "@/components/common/tooltip";
import { navsConfig } from "@/configs/navs.config";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { TiHeart } from "react-icons/ti";
import Image from "next/image";
const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white mb-[16px]">
      <div className="max-w-lg mx-auto pb-[8px]">
        <div className="relative w-full aspect-[3/1] overflow-hidden rounded-[12px]">
          <Image
            src="/assets/images/cover.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative flex justify-between -translate-y-[8px]">
          <div className="flex items-center">
            <div className="mr-[12px] size-[115px] rounded-full border-[2px] border-white">
              <Image
                src="/assets/images/avatar-2.webp"
                alt=""
                width={400}
                height={400}
                className="border-[2px] size-[115px]  object-contain border-white rounded-full "
              />
            </div>
            <div>
              <h2 className="text-[24px] font-semibold font-inter text-textColor-origin">
                Tuananh Notebook
              </h2>
              <div className="flex items-center">
                <TiHeart className="mr-[4px] text-[20px] text-[#ff5c65]" />
                <span>Web Developer</span>
              </div>
            </div>
          </div>
          <div className=" flex items-center">
            <div className=" flex items-center">
              <p>Follow me on:</p>
              <ul className="pl-[12px] flex items-center gap-x-[8px]">
                <Link href="https://www.facebook.com/jm.1511/" target="_blank">
                  <Tooltip tooltipText="jm.1511">
                    <FaFacebookF className=" size-[20px] text-gray-500" />
                  </Tooltip>
                </Link>
                <Link
                  href="https://www.instagram.com/hoanganh.ui/"
                  target="_blank"
                >
                  <Tooltip tooltipText="hoanganh.ui">
                    <FaInstagram className=" size-[20px] text-gray-500" />
                  </Tooltip>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto ">
        <div className="flex items-center">
          {navsConfig.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <div key={idx} className="px-[12px]">
                <Link
                  href={item.href}
                  className={`py-[20px] block font-semibold relative ${isActive ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-primary" : "text-textColor"} `}
                >
                  {item.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Navigation;
