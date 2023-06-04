import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import OGImageGenerator from "@/lib/og-image-generator";
import Content from "./content";
import { getAllBlogs, getBlogBySlug } from "../api";

export default async function Page({ params }: any) {
  const { slug } = params;

  if (!slug) {
    return redirect("/blogs");
  }

  const blog = getBlogBySlug(slug, ["title", "date", "content", "categories"]);

  return <Content blog={blog} />;
}

export const dynamicParams = false;

async function generateOGImages(blogs: any) {
  await OGImageGenerator(blogs)
    .then(() => console.log("OG image generated"))
    .catch((err: any) => {
      console.error(err);
    });
}

export async function generateStaticParams() {
  const blogs = getAllBlogs(["slug", "title", "ogtitle", "ogsubtitle"]);
  process.env.NODE_ENV === "production" && (await generateOGImages(blogs));
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

  const { title, description } = getBlogBySlug(slug, ["title", "description"]);

  const url = `${(await parent)?.openGraph?.url}/blogs/${slug}`;

  const img = `img/og/${slug}.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: img,
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: img,
    },
  };
}
