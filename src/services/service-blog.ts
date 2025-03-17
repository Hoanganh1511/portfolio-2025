import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
interface IParams {
  category?: string;
  limit?: number;
}
// && $series in series[]->slug.current
export const getArticlesByCategory = async (params: IParams) => {
  const querySanity = groq`*[_type=="post" && $series match series->slug.current] ${params.limit ? `[0...${params.limit}]` : ""}{
               ...,
               
             } | order(_updatedAt desc)`;
  console.log(params.category);
  return client.fetch(querySanity, { series: params.category });
};

export const getAllSeries = async () => {
  const querySanity = groq`*[_type=="series" ] {
               ...,
              
            
             } | order(_updatedAt desc)`;
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
