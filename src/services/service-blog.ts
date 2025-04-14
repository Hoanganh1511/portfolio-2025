import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
interface IParams {
  category?: string;
  limit?: number;
}
// && $series in series[]->slug.current
export const getArticlesByCategory = async (params: IParams) => {
  const querySanity = groq`*[_type=="post" ${params.category ? "&& $series match series->slug.current" : ""}] ${params.limit ? `[0...${params.limit}]` : ""}{
               ...,
               
             } | order(_updatedAt desc)`;
  return client.fetch(querySanity, { series: params.category });
};

export const getAllSeries = async () => {
  const querySanity = groq`*[_type=="series" ] {
               ...,
              
            
             } | order(_updatedAt asc)`;
  //  "series": *[_type == 'series' && slug.current == $series][0]
  const data = await client.fetch(querySanity, {
    // series: params.category,
  });

  if (!data.length) {
    return {
      series: [],
    };
  }
  return {
    series: data,
  };
};

export const getServerPost = async (slug: string) => {
  return await client.fetch(
    groq`*[_type=="post" && slug.current == $slug ][0]{ ... }`,
    {
      slug,
    }
  );
};
