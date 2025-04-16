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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaLink } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { urlFor } from "@/lib/sanity/image";
import PostDetail from "@/components/sections/home/PostDetail";
const BlogCard = ({ data }: { data: IPost }) => {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [openShareOptions, setOpenShareOptions] = useState(false);
  const handleOpenShareOptions = () => {
    setOpenShareOptions((prev) => !prev);
  };
  return (
    <>
      <div className="group block bg-white p-[20px]  gap-x-[20px] rounded-[18px]">
        <Dialog open={openDetailModal} onOpenChange={setOpenDetailModal}>
          <div
            onClick={() => setOpenDetailModal(true)}
            className="w-full flex flex-col items-start cursor-pointer"
          >
            <p className="mb-[12px] text-[13.5px] font-inter text-textColor  opacity-70 line-clamp-3">
              {formatDate(data._updatedAt)}
            </p>
            <h3 className="mb-[8px] group-hover:opacity-[0.85] duration-100 lowercase  text-[18px] font-semibold flex-1">
              {data.title}
            </h3>
            {data.sapo && <p className="pt-[8px]">{data.sapo}</p>}
            {data.mainImage && (
              <div className="mt-[12px] relative w-[calc(100%+40px)] -mx-[20px] aspect-[550/360]">
                <Image
                  src={urlFor(data.mainImage).url()}
                  // src="/default-blog-image.jpg"
                  fill
                  quality={100}
                  alt=""
                  className="object-contain"
                />
              </div>
            )}
          </div>
          <DialogContent>
            <PostDetail data={data} />
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
          <Popover>
            <PopoverTrigger asChild>
              <button onClick={handleOpenShareOptions} className="px-[12px]">
                <PiShareFat />
              </button>
            </PopoverTrigger>

            <PopoverContent onOpenAutoFocus={(e) => e.preventDefault()}>
              <div>
                <h3 className="font-semibold text-[#192025]">Share This</h3>
                <div className="mt-[8px] flex items-center gap-x-[10px]">
                  <button className="px-[6px] py-[3px] rounded-[8px] border-[1px] border-[#ebeff3] hover:bg-gray-100 hover:border-gray-100">
                    <FaLink className="text-[22px]" />
                  </button>
                  <button className="px-[6px] py-[3px] rounded-[8px] border-[1px] border-[#ebeff3] hover:bg-gray-100 hover:border-gray-100">
                    <FaFacebook className="text-[22px] text-[#4e87ff]" />
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
