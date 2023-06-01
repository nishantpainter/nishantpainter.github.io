import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import Content from "./content";
import { getAllBlogs, getBlogBySlug } from "../api";

export const dynamicParams = false;

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

  const { title } = getBlogBySlug(slug, ["title"]);

  const description = title;
  const url = `${(await parent)?.openGraph?.url}/blogs/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url,
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
    },
  };
}

export default async function Page({ params }: any) {
  const { slug } = params;

  if (!slug) {
    return redirect("/blogs");
  }

  const blog = getBlogBySlug(slug, ["title", "date", "content"]);

  return <Content blog={blog} />;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs(["slug"]);
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}
