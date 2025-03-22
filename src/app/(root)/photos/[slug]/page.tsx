import RichTextComponent from "@/components/rich-text-component";
import { getServerPost } from "@/services/service-blog";
import React from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
const DetailTechIUsesPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = await getServerPost(slug);
  return (
    <div className="max-w-md mx-auto px-[20px] 2xl:px-[60px]">
      <Image
        src={urlFor(post.mainImage)?.url()}
        alt="keyboard"
        width={1280}
        height={606}
        className="mb-[24px] w-full aspect-[1280/606] rounded-[12px]"
      />
      <h1 className="font-bold  text-[44px] font-mono">{post.title}</h1>
      <p className="text-black/70">{post.sapo}</p>
      <hr className="my-[16px] border-black/30" />
      <PortableText value={post.body} components={RichTextComponent} />
    </div>
  );
};

export default DetailTechIUsesPage;
