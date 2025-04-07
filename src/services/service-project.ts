import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
interface IParams {
  category?: string;
  limit?: number;
}
// && $series in series[]->slug.current

export const getAllProjects = async () => {
  const querySanity = groq`*[_type=="project" ] {
               ...,
              
            
             } | order(_updatedAt asc)`;
  //  "series": *[_type == 'series' && slug.current == $series][0]
  const data = await client.fetch(querySanity, {
    // series: params.category,
  });

  if (!data.length) {
    return {
      projects: [],
    };
  }
  return {
    projects: data,
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
