import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { seriesType } from "./seriesType";
export const schema = {
  types: [blockContentType, categoryType, postType, authorType, seriesType],
};
