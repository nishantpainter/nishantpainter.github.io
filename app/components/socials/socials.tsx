import { useThemeContext } from "@/app/theme";
import Box, { BoxProps } from "@mui/material/Box";
import Image from "next/image";

const dimensions = {
  sm: {
    height: 25,
    width: 25,
  },
  md: {
    height: 35,
    width: 35,
  },
};

export function Socials({
  size = "sm",
  darkMode,
  ...rest
}: BoxProps & { size?: "sm" | "md"; darkMode?: boolean }) {
  return (
    <Box display="flex" columnGap={1} {...rest}>
      {[
        {
          title: "Github",
          href: "https://github.com/nishantpainter",
          alt: "Image for social site github",
          img: `/img/social/${darkMode ? "github-white" : "github"}.svg`,
        },
        {
          title: "Linkedin",
          href: "https://in.linkedin.com/in/nishant-painter-31388582",
          alt: "Image for social site linkedin",
          img: `/img/social/${darkMode ? "linkedin-white" : "linkedin"}.svg`,
        },
        {
          title: "Stackoverflow",
          href: "https://stackoverflow.com/users/13841339/nishant-painter",
          alt: "Image for social site stackoverflow",
          img: `/img/social/${darkMode ? "so-white" : "so"}.svg`,
        },
        {
          title: "Medium",
          href: "https://medium.com/@nishantpainter",
          alt: "Image for social site medium",
          img: `/img/social/${darkMode ? "medium-white" : "medium"}.svg`,
        },
      ].map(({ href, title, alt, img }) => (
        <a key={href} href={href} title={title} target="_blank">
          <Image {...dimensions[size]} src={img} alt={alt} />
        </a>
      ))}
    </Box>
  );
}

export default Socials;
