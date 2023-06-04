import fs from "fs";
import path from "path";
import generator from "node-html-to-image";

const root = path.join(process.cwd());
const outputdir = path.join(root, "public", "img", "og");
const template = path.join(root, "lib", "og-image-generator", "template.ejs");

export default async function generate(items: any[]) {
  if (!fs.existsSync(outputdir)) {
    fs.mkdirSync(outputdir);
  }
  await generator({
    html: fs.readFileSync(template, "utf-8"),
    content: items.map(({ slug, title, ogtitle, ogsubtitle }) => ({
      title: ogtitle || title,
      subtitle: ogsubtitle,
      author: "By Nishant Painter",
      output: path.join(outputdir, `${slug}.png`),
    })),
  });
}
