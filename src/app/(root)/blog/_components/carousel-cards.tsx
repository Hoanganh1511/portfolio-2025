"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./blog-card";
import "swiper/css";
import { IPost } from "@/types/service-api";
import { getArticlesByCategory } from "@/services/service-blog";
// const data = await getArticlesByCategory({
//   category: "optimize-performance",
//   limit: 4,
// });
const CarouselCard = ({ seriesSlug }: { seriesSlug: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`articles-${seriesSlug}`],
    queryFn: () =>
      getArticlesByCategory({
        category: seriesSlug,
        limit: 4,
      }),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
  if (isLoading) return <p>Loading...</p>;
  if (!data || data.length === 0)
    return <p>Danh mục này chưa có bài viết nào</p>;
  console.log(data);

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="!py-[24px]"
    >
      <span
        className={`absolute left-0 top-0 w-full h-[1px] border-b-[1px] border-gray-200`}
      />
      {data.map((item: IPost, idx: number) => {
        return (
          <SwiperSlide key={idx} className="relative ">
            <BlogCard data={item} />
            <span
              className={`absolute left-[calc(100%+20px)] top-1/2 -translate-y-1/2 w-[1px] h-[calc(100%+0px)] border-r-[1px] border-gray-200`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselCard;
