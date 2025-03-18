import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import React, { useState } from "react";
import BlogCard from "./_components/blog-card";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { getAllSeries, getArticlesByCategory } from "@/services/service-blog";
import CarouselCard from "./_components/carousel-cards";
import { Series } from "@/types/service-api";
const BlogPage = async () => {
  const seriesRes = await getAllSeries();

  const { series } = seriesRes;

  return (
    <div className="max-w-xl mx-auto px-[30px] pb-[50px]">
      <div className="grid grid-cols-12 gap-x-[20px] gap-y-[30px]">
        {series.map((_: Series, idx: number) => {
          return (
            <div
              key={idx}
              className="col-span-12 grid grid-cols-12 gap-x-[20px]"
            >
              {/* <div className="col-span-2">
                <h2 className="text-[26px] font-bold">{_.name}</h2>
                <Link
                  href="/"
                  className="mt-[20px] flex items-center font-bold hover:opacity-70"
                >
                  See all <GoArrowRight className="ml-[6px] text-[20px]" />{" "}
                </Link>
              </div> */}
              <div className="col-span-12">
                <CarouselCard seriesSlug={_.slug.current} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
{
  /* <button
        onClick={() => setShowModal(true)}
        className="p-[8px] bg-gray-200 rounded-[12px]"
      >
        Open Modal
      </button>
      <CoreModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="px-[30px]">
          <p className="text-center text-white">Hello from the modal!</p>
        </div>
      </CoreModal> */
}
export default BlogPage;
