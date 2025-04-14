"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface Series {
  _id: string;
  _type: "series";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  shortDesc: string;
  slug: {
    current: string;
    _type: "slug";
  };
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}
const MenuLeft = ({ series }: { series: Series[] }) => {
  const router = useRouter();
  const [isActive, setActive] = useState("");
  const handleClick = (slug: string) => {
    setActive(slug);
    if (slug) {
      router.push(`/blog?s=${slug}`);
    } else {
      router.push("/blog");
    }
  };
  return (
    <div className="">
      <ul className="flex flex-wrap gap-x-[10px]">
        <li
          key={0}
          onClick={() => handleClick("")}
          className={`mr-[8px] ${isActive === "" ? "font-semibold text-primary" : ""}`}
        >
          <p className="py-[4px] hover:text-primary cursor-pointer">Tất cả</p>
        </li>
        {series &&
          series.map((_, idx) => {
            return (
              <li key={_._id} onClick={() => handleClick(_.slug.current)}>
                <p
                  className={`${isActive === _.slug.current ? "font-semibold text-primary cursor-pointer border-primary" : "hover:text-primary border-gray-200 cursor-pointer"} py-[4px] border-[1px]  px-[8px] rounded-[6px]`}
                >
                  {_.name}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MenuLeft;
