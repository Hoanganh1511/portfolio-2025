"use client";
import CoreModal from "@/components/core/CoreModal";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import React, { useState } from "react";
import BlogCard from "./_components/blog-card";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
const BlogPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="max-w-xl mx-auto px-[30px] pb-[50px]">
      <div className="grid grid-cols-12 gap-x-[20px] gap-y-[30px]">
        <div className="col-span-12 grid grid-cols-12 gap-x-[20px]">
          <div className="col-span-2">
            <h2 className="text-[28px] font-bold">Web</h2>
            <Link
              href="/"
              className="mt-[20px] flex items-center font-bold hover:opacity-70"
            >
              Họ See all <GoArrowRight className="ml-[6px] text-[20px]" />{" "}
            </Link>
          </div>
          <div className="col-span-10">
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => {
                return (
                  <SwiperSlide key={idx} className="relative ">
                    <BlogCard />
                    <span
                      className={`absolute left-[calc(100%+20px)] top-1/2 -translate-y-1/2 w-[1px] h-[calc(100%+0px)] border-r-[1px] border-gray-200`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-x-[20px]">
          <div className="col-span-2">
            <h2 className="text-[28px] font-bold">Mobile</h2>
          </div>
          <div className="col-span-10">
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => {
                return (
                  <SwiperSlide key={idx} className="relative ">
                    <BlogCard />
                    <span
                      className={`absolute left-[calc(100%+20px)] top-1/2 -translate-y-1/2 w-[1px] h-[calc(100%+0px)] border-r-[1px] border-gray-200`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      {/* <button
        onClick={() => setShowModal(true)}
        className="p-[8px] bg-gray-200 rounded-[12px]"
      >
        Open Modal
      </button>
      <CoreModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="px-[30px]">
          <p className="text-center text-white">Hello from the modal!</p>
        </div>
      </CoreModal> */}
    </div>
  );
};

export default BlogPage;
