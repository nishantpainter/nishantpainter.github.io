import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Publication | Nishant Painter",
  description: "Conference papers by Nishant Painter",
};

export default function Page() {
  return <Content />;
}
