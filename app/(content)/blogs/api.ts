import path from "path";
import fs from "fs";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "_blogs");

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  for (let field of fields) {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content || "";
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  }

  return items;
}

export function getAllBlogs(fields: string[] = []) {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug, fields))
    .sort((blog1: any, blog2: any) =>
      new Date(blog1.date) > new Date(blog2.date) ? -1 : 1
    );
  return blogs;
}
