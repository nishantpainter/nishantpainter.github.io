import { Metadata } from "next";
import Content from "./content";
import { getAllBlogs } from "./api";

export const metadata: Metadata = {
  title: "Blog | Nishant Painter",
  description: "Articles by Nishant Painter",
};

export default async function Page() {
  const blogs = getAllBlogs([
    "slug",
    "title",
    "description",
    "date",
    "categories",
  ]);
  return <Content blogs={blogs} />;
}
