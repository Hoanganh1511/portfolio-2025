import React from "react";
import { getAllSeries, getArticlesByCategory } from "@/services/service-blog";
import CarouselCard from "./_components/carousel-cards";
import MenuLeft from "./_components/menu-left";
export const dynamic = "force-static";
const BlogPage = async () => {
  const seriesRes = await getAllSeries();

  const { series } = seriesRes;
  return (
    <div className="max-w-[550px] w-full mx-auto px-[15px] pb-[50px]">
      <div className="mt-[20px] flex flex-col gap-y-[20px]">
        <div className=" py-[15px] px-[24px] bg-white rounded-[18px]"></div>
        <div className="flex-1  gap-y-[30px] ">
          <CarouselCard />
        </div>
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
{
  /* <div className="col-span-2">
                <h2 className="text-[26px] font-bold">{_.name}</h2>
                <Link
                  href="/"
                  className="mt-[20px] flex items-center font-bold hover:opacity-70"
                >
                  See all <GoArrowRight className="ml-[6px] text-[20px]" />{" "}
                </Link>
              </div> */
}
export default BlogPage;
