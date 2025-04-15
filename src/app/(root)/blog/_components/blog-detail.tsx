"use client";
import RichTextComponent from "@/components/rich-text-component";
import { formatDate } from "@/lib/helpers/date";
import { IPost } from "@/types/service-api";
import { useSession } from "next-auth/react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";
import { BsChat } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";

const DetailBlog = ({ data }: { data: IPost }) => {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="p-[20px] h-[98vh] overflow-y-scroll">
        <div className="flex items-center mb-[16px]">
          <div className="mr-[12px] size-[50px] rounded-full border-[2px] border-white">
            <Image
              src="/assets/images/avatar-2.webp"
              alt=""
              width={400}
              height={400}
              className="border-[2px] object-contain border-white rounded-full "
            />
          </div>
          <div>
            <h2 className="text-[16px] font-semibold font-inter text-textColor-origin">
              Tuananh Notebook
            </h2>
            <div className="flex items-center">
              <span className="text-[13px] text-[#848a95]">
                {" "}
                {formatDate(data._updatedAt)}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-[16px] flex items-center gap-x-[8px]">
          <button className="group py-[8px] px-[16px] bg-[#c0b6b380] hover:bg-[#c0b6b380] rounded-[8px]">
            <IoMdHeartEmpty className="group-hover:scale-[1.08] duration-200 will-change-transform" />
          </button>
          {/* <button className="group py-[8px] px-[16px] bg-[#c0b6b380] hover:bg-[#c0b6b380] rounded-[8px]">
            <BsChat className="group-hover:scale-[1.08] duration-200 will-change-transform" />
          </button> */}
          <button className="group py-[8px] px-[16px] bg-[#b9b2b080] hover:bg-[#c0b6b380] rounded-[8px]">
            <PiShareFat className="group-hover:scale-[1.08] duration-200 will-change-transform" />
          </button>
        </div>
        <h1 className="mb-[20px] font-bold text-[24px] ">{data.title}</h1>
        <PortableText value={data.body} components={RichTextComponent} />
      </div>
    </>
  );
};

export default DetailBlog;
