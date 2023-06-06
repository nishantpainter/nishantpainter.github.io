import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nishantpainter.com",
      lastModified: new Date(),
    },
    {
      url: "https://nishantpainter.com/blogs",
      lastModified: new Date(),
    },
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
