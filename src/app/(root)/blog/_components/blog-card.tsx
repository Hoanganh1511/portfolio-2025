import React from "react";
import Image from "next/image";
import Link from "next/link";
const BlogCard = () => {
  return (
    <Link href="/" className="group">
      <div className="group flex flex-col gap-y-[20px]">
        {/* Visual */}
        <div className="relative w-full aspect-[16/9]">
          <Image src="/default-blog-image.jpg" fill alt="" />
        </div>
        {/*Infor Description Text */}
        <div>
          <h3 className="group-hover:opacity-[0.7] duration-100 font-inter text-[18px] font-bold">
            My plan to create this website
          </h3>
          <p className="mt-[8px] font-inter text-textColor line-clamp-3">
            Descriptive Text. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sed est error repellat veritatis.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
