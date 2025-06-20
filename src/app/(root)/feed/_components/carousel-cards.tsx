"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./blog-card";
import "swiper/css";
import { IPost } from "@/types/service-api";
import { getArticlesByCategory, getDailyPosts } from "@/services/service-blog";
import { useSearchParams } from "next/navigation";
// const data = await getArticlesByCategory({
//   category: "optimize-performance",
//   limit: 4,
// });
const CarouselCard = () => {
  const searchParams = useSearchParams();
  const s = searchParams.get("s") ?? "";
  const [currentSeries, setCurrentSeries] = useState("");

  const {
    data: dailyPosts,
    isLoading: dailyPostsLoading,
    error: dailyPostsError,
  } = useQuery({
    queryKey: [`daily-posts`],
    queryFn: () => getDailyPosts(),
    staleTime: 1000 * 60, // Cache for 5 minutes
  });
  useEffect(() => {
    setCurrentSeries(s);
  }, [s]);
  if (dailyPostsLoading)
    return (
      <div className="flex flex-col gap-y-[10px]">
        {[1, 2, 3, 4, 5, 6].map((_) => {
          return (
            <div key={_} className="flex flex-col gap-y-[10px]">
              <div className="w-full h-[35px] rounded-[8px] bg-gray-200 animate-pulse"></div>
              <div className="w-[120px] h-[25px] rounded-[8px] bg-gray-200 animate-pulse"></div>
            </div>
          );
        })}
      </div>
    );
  // <p className="text-center">Loading...</p>;
  if (!dailyPosts || dailyPosts.data?.length === 0)
    return <p className="text-center">Danh mục này chưa có bài viết nào</p>;

  return (
    <div className="flex flex-col gap-y-[20px]">
      {dailyPosts.data?.map((item: IPost, idx: number) => {
        console.log(item);
        return (
          <div key={idx} className="relative ">
            <BlogCard data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CarouselCard;
