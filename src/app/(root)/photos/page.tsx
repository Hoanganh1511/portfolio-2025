"use client";
import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getPostUses } from "@/services/service-uses";
import { urlFor } from "@/lib/sanity/image";
import { IPost } from "@/types/service-api";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
const PhotosPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`tech-i-uses`],
    queryFn: () =>
      getPostUses({
        category: "what-i-uses",
        limit: 6,
      }),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
  console.log("tech use", data);
  return (
    <div className="max-w-md mx-auto px-[30px] pb-[50px] mt-[20px]">
      <div className="relative h-[320px] w-screen left-1/2 -translate-x-1/2 bg-black/90 rounded-[18px] flex justify-center overflow-hidden">
        <Image
          src="/assets/images/uses/workspace_1.jpg"
          width={1980}
          height={880}
          alt=""
          className="object-center object-contain max-w-lg w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white/70 flex flex-col items-center justify-center">
          <span className="block w-fit mx-auto font-mono">WELCOME TO</span>
          <h1 className="mx-auto w-fit text-[32px] font-semibold">
            A curated list of the tech I{" "}
            <span className="text-[#E9762B]">use</span>
          </h1>
        </div>
      </div>
      <div className="pt-[30px]">
        <p>
          Là một nhà phát triển phần mềm, tôi đã dành hàng giờ liền tại bàn làm
          việc của mình mỗi ngày. Vì vậy, tôi đã liên tục cải thiện không gian
          làm việc của mình để tăng năng suất. Đây là danh sách chụp nhanh các
          thiết bị công nghệ mà tôi sử dụng.{" "}
          <Link href="/" className=" text-[#D84040] ">
            Tìm hiểu thêm về tôi <RiArrowRightLine className="inline-block" />
          </Link>
        </p>
        <div className="mt-[30px] grid grid-cols-6 gap-x-[20px]">
          {data &&
            data.length > 0 &&
            data.map((item: IPost) => {
              return (
                <Link
                  href={`/photos/${item.slug.current}`}
                  key={item._id}
                  className="col-span-3 cursor-pointer group"
                >
                  <Image
                    src={urlFor(item.mainImage)?.url()}
                    alt="keyboard"
                    width={1280}
                    height={606}
                    className="group-hover:opacity-[0.95] duration-300 w-full aspect-[1280/606] rounded-[12px]"
                  />
                  <h3 className="mt-[12px] group-hover:underline duration-200 text-center font-semibold text-[20px]">
                    {item.title}
                  </h3>
                  <p className="text-black/70 text-center text-[16px]">
                    {item.sapo}
                  </p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;
