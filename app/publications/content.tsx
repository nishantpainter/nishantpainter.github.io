"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type PublicationProps = {
  href: string;
  title: string;
  img: string;
  alt: string;
  children: React.ReactElement;
};

function Publication({ href, title, img, alt, children }: PublicationProps) {
  return (
    <Box
      component="article"
      display="flex"
      alignItems="center"
      p={3}
      boxShadow={8}
      borderRadius={1}
      columnGap={2}
    >
      <Image height={250} width={170} src={img} alt={alt} />
      <Box display="flex" flexDirection="column" rowGap={2}>
        <Typography variant="h6">
          <b>{title}</b>
        </Typography>
        {children}
        <Box>
          <Button
            component="a"
            variant="outlined"
            color="primary"
            href={href}
            target="_blank"
          >
            See Publication
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default function Content() {
  return (
    <Box component={Container} fixed minHeight="100%">
      <Box
        component="main"
        display="flex"
        flexDirection="column"
        rowGap={2}
        pt={5}
        pb={2}
      >
        <Typography variant="h4">
          <b>Publications</b>
        </Typography>
        <Publication
          title="Machine-Learning-Based Android Malware Detection Techniques—A
              Comparative Analysis"
          img="/img/publication/springer-information-and-communication-technology-for-sustainable-development.jpg"
          alt="Information and Communication Technology for Sustainable Development"
          href="https://link.springer.com/chapter/10.1007/978-981-10-3932-4_19"
        >
          <Typography>
            Today, Smartphones can handle myriad of programs and applications
            that perform a wide varieties of functions. In recent years, Android
            has been a globally anticipated open source operating system for
            Smartphones. However, rapid advancement of Android is marred with
            augmenting threats of Android malwares that perform pernicious
            activities on Smartphones. This paper disserts existing
            machine-learning-based Android malware detection techniques and
            presents parametric comparison of discussed malware detection
            techniques. Hence, this paper targets to study various
            machine-learning-based detection techniques and to establish
            probable future directions.
          </Typography>
        </Publication>
        <Publication
          title="Comparative Analysis of Android Malware Detection Techniques"
          img="/img/publication/springer-proceedings-of-the-international-conference-on-data-engineering-and-communication-technology.jpg"
          alt="Information and Communication Technology for Sustainable Development"
          href="https://link.springer.com/book/10.1007/978-981-10-1678-3"
        >
          <Typography>
            In recent years, the widespread adoption of smartphones has led to a
            new age of information exchange. Among smartphones, Android devices
            have gained huge popularity due to the open architecture of Android
            and advanced programmable software framework to develop mobile
            applications. However, the pervasive adoption of Android is coupled
            with progressively uncontrollable malware threats. This paper gives
            an insight of existing work in Android malware detection.
            Additionally, this paper highlights the parametric comparison of
            existing Android malware detection techniques. Thus, this paper aims
            to study various Android malware detection techniques and to
            identify plausible research direction.
          </Typography>
        </Publication>
      </Box>
    </Box>
  );
}
