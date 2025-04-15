"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IPost } from "@/types/service-api";
import { Link } from "next-view-transitions";
import { formatDate } from "@/lib/helpers/date";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import CoreModal from "@/components/core/CoreModal";
import { PortableText } from "next-sanity";
import RichTextComponent from "@/components/rich-text-component";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TiHeart } from "react-icons/ti";
import DetailBlog from "./blog-detail";
const BlogCard = ({ data }: { data: IPost }) => {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  return (
    <>
      <div className="group block bg-white p-[20px]  gap-x-[20px] rounded-[18px]">
        {/* <div className="relative w-full aspect-[16/9]">
          <Image
            // src={urlFor(data.mainImage).url()}
            src="/default-blog-image.jpg"
            fill
            alt=""
          />
        </div> */}
        <Dialog open={openDetailModal} onOpenChange={setOpenDetailModal}>
          <DialogTrigger>
            <div
              onClick={() => setOpenDetailModal(true)}
              className="flex flex-col items-start cursor-pointer"
            >
              <h3 className="group-hover:opacity-[0.85] duration-100 font-inter text-[16px] flex-1">
                {data.title}
              </h3>

              <p className="mt-[8px] text-[13.5px] font-inter text-textColor  opacity-70 line-clamp-3">
                {formatDate(data._updatedAt)}
              </p>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DetailBlog data={data} />
          </DialogContent>
        </Dialog>
        <div className="mt-5 flex items-center">
          <button className="px-[12px]">
            <FaRegHeart />
          </button>
          <button
            onClick={() => setOpenDetailModal(true)}
            className="px-[12px]"
          >
            <FaRegComment />
          </button>
          <button className="px-[12px]">
            <PiShareFat />
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
