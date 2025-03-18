"use client";
import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  [x: string]: any;
}
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const article = document.querySelector("#article");

    article?.classList.add("page-transition");

    await sleep(350);
    router.push(href);
    await sleep(350);

    article?.classList.remove("page-transition");
  };
  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};

export default TransitionLink;
