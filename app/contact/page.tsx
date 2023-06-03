import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Contact | Nishant Painter",
  description: "Contact Nishant Painter",
};

export default function Page() {
  return <Content />;
}
