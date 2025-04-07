import { socialsConfig } from "@/configs/navs.config";
import Image from "next/image";
import Link from "next/link";
import { SiVite } from "react-icons/si";
export default function Home() {
  return (
    <div className="max-w-md mx-auto px-[30px] pb-[50px]">
      <h2 className="mb-[20px] text-[36px] font-semibold font-inter text-textColor-origin">
        Hoàng Tuấn Anh
      </h2>
      <p className="my-[20px] text-textColor">
        Hey, I am Hoàng Tuấn Anh, a Front End Engineer
      </p>
      <div className="flex items-center text-textColor">
        <span className="mr-[6px]"> Working at </span>
        <TechBadge icon={"/icons/intecom-icon.png"} label="VTC Intecom" />
      </div>
      <div className="my-[20px]  ">
        <div className="mb-[8px] flex items-center flex-wrap text-textColor">
          <span>🛠️ Technologies & Tools</span>{" "}
          <div className="mt-[8px] ml-[6px] inline-flex flex-wrap items-center gap-x-[6px] gap-y-[8px]">
            <TechBadge icon={"/icons/react-icon.png"} label="React" />
            <TechBadge icon={"/icons/nextjs-icon.png"} label="Next.js" />
            <TechBadge icon={"/icons/vite-icon.png"} label="Vite" />
            <TechBadge icon={"/icons/zustand.webp"} label="Zustand" />
            <TechBadge icon={"/icons/redux.webp"} label="Redux" />
            <TechBadge icon={"/icons/javascript.png"} label="JavaScript" />
            <TechBadge icon={"/icons/typescript.png"} label="TypeScript" />
            <TechBadge icon={"/icons/nodejs.png"} label="Node.js" />
            <TechBadge icon={"/icons/express-js.png"} label="Express.js" />
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
            {/* <TechBadge icon={"/icons/framer-motion.png"} label="Apollo" /> */}
            <TechBadge icon={"/icons/graphql.png"} label="GraphQL" />
          </div>
        </div>
      </div>
      <p className="my-[20px] leading-[1.8rem] text-textColor">
        Creating beautiful, fast websites with an impressive user experience for
        customers is my passion. You can find my{" "}
        <Link
          href="/projects"
          className="text-textColor-origin relative after:absolute after:top-[calc(100%+2px)] after:left-0 after:w-full after:h-[1px] after:duration-500 after:bg-gray-300 hover:after:bg-textColor cursor-pointer"
        >
          full projects list here.
        </Link>
      </p>
      <p className="my-[20px] leading-[1.8rem] text-textColor">
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
      <p className="my-[20px] leading-[1.8rem] text-textColor">
        I live in Hanoi, so if you&apos;re nearby, feel free to reach
        out—let&apos;s grab a coffee or work together!
      </p>
      <div className="my-[30px] mx-auto w-[80px] h-[1px] bg-gray-300/80" />
      <div>
        <p className="my-[20px] leading-[1.8rem] text-textColor">Find me on</p>
        <ul className="flex items-center gap-x-[8px]">
          {socialsConfig.map((social) => {
            return (
              <li key={social.id}>
                <Link
                  href={social.href}
                  className="group relative cursor-pointer flex items-center"
                >
                  <social.icon className="mr-[4px] text-[18px] text-textColor" />
                  <span className="text-textColor">{social.text}</span>
                  <span className="absolute top-[calc(100%+2px)] left-0 w-full h-[0px]  border-b-[1px] border-gray-200 dark:border-white/40 group-hover:border-black/80 dark:group-hover:border-white/80 duration-500" />
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="my-[20px] leading-[1.8rem] text-textColor">
          Or email me at{" "}
          <span className="font-dm_mono">anhht.fe@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

const Badge = ({
  children,
  ...restProps
}: {
  children: React.ReactNode | string;
}) => {
  return (
    <div
      {...restProps}
      className="inline-block ml-[2px] px-[6px] py-[4px] rounded-[4px] bg-gray-200 text-[16px] font-medium leading-[1rem] text-black/80"
    >
      {children}
    </div>
  );
};
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
