import { Metadata } from "next";
import { redirect } from "next/navigation";
import Content from "./content";
import { markdownToHtml } from "../utils";
import { getAllBlogs, getBlogBySlug } from "../api";

export const metadata: Metadata = {
  title: "Blog | Nishant Painter",
  description: "Articles by Nishant Painter",
};

export const dynamicParams = true;

export default async function Page({ params }: any) {
  const { slug } = params;

  if (!slug) {
    return redirect("/blogs");
  }

  const blog = getBlogBySlug(slug, ["title", "date", "content"]);

  blog.content = await markdownToHtml(blog.content);

  return <Content blog={blog} />;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs(["slug"]);
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}
