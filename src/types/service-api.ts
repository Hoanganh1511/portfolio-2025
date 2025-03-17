export interface Slug {
  current: string;
  _type: "slug";
}

export interface Series {
  _updatedAt: string;
  image: Record<string, unknown>; // Assuming it's an object
  _createdAt: string;
  _type: "series";
  name: string;
  shortDesc: string;
  _id: string;
  slug: Slug; // Assuming it's an object
  _rev: string;
}

export interface IPost {
  _rev: string;
  _type: "post";
  body: Record<string, unknown>[]; // Assuming an array of objects
  _updatedAt: string;
  slug: Slug;
  _createdAt: string;
  title: string;
  sapo?: string;
  series?: Series; // Optional, since it may not always be present
  author?: unknown | null; // Placeholder for author data
  _id: string;
}
