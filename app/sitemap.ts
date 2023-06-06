import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const blogsDir = path.resolve(process.cwd(), "_blogs");

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = fs.readdirSync(blogsDir).map((file: string) => {
    return {
      url: "https://nishantpainter.com/blogs/" + file.replace(".md", ""),
      lastModified: new Date(),
    };
  });

  return [
    {
      url: "https://nishantpainter.com",
      lastModified: new Date(),
    },
    {
      url: "https://nishantpainter.com/blogs",
      lastModified: new Date(),
    },
    ...blogs,
    {
      url: "https://nishantpainter.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://nishantpainter.com/publications",
      lastModified: new Date(),
    },
    {
      url: "https://nishantpainter.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://nishantpainter.com/contact",
      lastModified: new Date(),
    },
  ];
}
