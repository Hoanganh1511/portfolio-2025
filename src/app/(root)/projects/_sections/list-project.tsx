import { urlFor } from "@/lib/sanity/image";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const ListProject = ({ data }: { data: any }) => {
  if (!data.length) return;
  return (
    <div className="grid grid-cols-6 gap-[20px]">
      {data.map((item: any, idx: number) => {
        return (
          <Link href="#" className="col-span-2 group" key={idx}>
            <div className="w-full aspect-[300/150] relative rounded-[18px] overflow-hidden shadow-md">
              <Image
                src={item.mainImage ? urlFor(item.mainImage).url() : ""}
                alt=""
                fill
                className="group-hover:scale-[1.02] duration-500 will-change-transform object-cover"
              />
            </div>
            <p className="mt-[8px] text-[16px] text-center max-w-[90%] mx-auto">
              {item.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ListProject;
