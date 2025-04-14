import React from "react";
import Image from "next/image";
import { IPost } from "@/types/service-api";
import { Link } from "next-view-transitions";
import { formatDate } from "@/lib/helpers/date";
const BlogCard = ({ data }: { data: IPost }) => {
  return (
    <Link href={`/blog/${data.slug.current}`} className="group">
      <div className="group flex flex-col gap-y-[20px]">
        {/* Visual */}
        {/* <div className="relative w-full aspect-[16/9]">
          <Image
            // src={urlFor(data.mainImage).url()}
            src="/default-blog-image.jpg"
            fill
            alt=""
          />
        </div> */}
        {/*Infor Description Text */}
        <div className="flex flex-col">
          <h3 className="group-hover:opacity-[0.85] duration-100 font-inter text-[16px] flex-1">
            {/* My plan to create this website */}
            {data.title}
          </h3>
          <p className="mt-[8px] text-[13.5px] font-inter text-textColor  opacity-70 line-clamp-3">
            by Tuấn Anh - {formatDate(data._updatedAt)}
          </p>
          {/* <p>{formatDate(data._updatedAt)}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
