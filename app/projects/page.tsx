import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Projects | Nishant Painter",
  description: "Projects by Nishant Painter",
};

export default function Page() {
  return <Content />;
}
