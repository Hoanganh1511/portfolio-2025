import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const seriesType = defineType({
  name: "series",
  title: "Series",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "shortDesc",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
