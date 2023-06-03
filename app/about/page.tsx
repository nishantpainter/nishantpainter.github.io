import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "About | Nishant Painter",
  description: "About Nishant Painter",
};

export default function Page() {
  return <Content />;
}
