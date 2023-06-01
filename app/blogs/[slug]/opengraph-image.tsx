import { ImageResponse } from "next/server";
import { getBlogBySlug } from "../api";

export let alt = "Image of blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { title } = getBlogBySlug(slug, ["title", "date"]);

  alt = title;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </div>
    ),
    {
      ...size,
    }
  );
}
