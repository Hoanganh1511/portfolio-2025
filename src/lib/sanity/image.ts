import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "./env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset } as {
  projectId: string;
  dataset: string;
});

export const urlFor = (source: any) => {
  return builder.image(source);
};
