import RichTextComponent from "@/components/rich-text-component";
import { getServerPost } from "@/services/service-blog";
import React from "react";
import { PortableText } from "next-sanity";

const DetailBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = await getServerPost(slug);
  return (
    <div className="max-w-[800px] mx-auto px-[20px] 2xl:px-[60px] pb-[60px]">
      <h1 className="mb-[60px] font-bold text-[44px] font-inter">
        {post.title}
      </h1>
      <PortableText value={post.body} components={RichTextComponent} />
    </div>
  );
};

export default DetailBlogPage;
