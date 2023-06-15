"use client";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MuiLink from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const Link = styled(MuiLink)({
  textDecoration: "none",
});
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
          <b>About</b>
        </Typography>
        <Typography>
          A dedicated and competent <b>full stack software engineer</b> with
          years of experience in various application development. Detail
          oriented and organised lead developer with creative mindset and strong
          project management abilities. Leader of cross-functional teams
          adhering to quality output and best practices. An overall impeccable
          academic record consisting of double gold medal in both graduation and
          post graduation, university topper.
        </Typography>
        <Divider />
        <Experience />
        <Divider />
        <Technologies />
        <Divider />
        <Education />
        <Divider />
        <Awards />
        <Divider />
        <Publications />
      </Box>
    </Box>
  );
}

function Experience() {
  return (
    <>
      <Typography variant="h6">
        <b>Experience</b>
      </Typography>
      <List>
        <ListItem>
          <ListItemText secondary="Surat, Gujarat, India">
            <Link href="https://axelor.com/">Axelor</Link> -&nbsp;
            <b>Tech lead</b>
            &nbsp;
            <br />( Apr 2021 - Current Date )
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="Surat, Gujarat, India">
            <Link href="https://axelor.com/">Axelor</Link> -&nbsp;
            <b>Sr. System Engineer</b>&nbsp;
            <br />( Feb 2018 - Mar 2021 )
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="Surat, Gujarat, India">
            <Link href="https://www.vidillion.com/">Vidillion</Link> -&nbsp;
            <b>Developer</b>&nbsp;
            <br />( Jan 2017 - Nov 2017 )
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}

function Technologies() {
  return (
    <>
      <Typography variant="h6" id="technologies">
        <b>Technologies and Tools</b>
      </Typography>
      <Box display="flex" flexWrap="wrap" rowGap={1} columnGap={1}>
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "SQL",
          "PostgresSQL",
          "NOSQL",
          "MongoDB",
          "NodeJS",
          "Socket",
          "Docker",
          "GIT",
          "React",
          "NextJS",
          "Remix",
          "Express",
          "NestJS",
          "REST",
          "Loopback",
          "Swagger",
          "Firebase",
          "AppScript",
        ].map((skill) => (
          <Chip label={skill} key={skill} />
        ))}
      </Box>
    </>
  );
}

function Education() {
  return (
    <>
      <Typography variant="h6">
        <b>Education</b>
      </Typography>
      <List>
        <ListItem>
          <ListItemText secondary="SCET, Surat, Gujarat, India">
            <b>Master of Engineering CGPA 9.69</b>
            &nbsp;
            <br />( Sep 2014 - Jul 2016 )
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="SCET, Surat, Gujarat, India">
            <b>Bachelor of Engineering CGPA 9.19</b>
            &nbsp;
            <br />( Sep 2009 - Jun 2013 )
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}

function Awards() {
  return (
    <>
      <Typography variant="h6">
        <b>Awards and Achievements</b>
      </Typography>
      <List>
        <ListItem>
          <ListItemText secondary="Gujarat Technological University">
            <b>Gold Medal - Master of Engineering</b>
            <br /> ( University Topper - All Engineering Streams )
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="Gujarat Technological University">
            <b>Gold Medal - Master of Engineering</b>
            <br /> ( University Topper - Computer Engineering )
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="SCET">
            <b>Gold Medal - Bachelor of Engineering</b>
            <br /> ( Institute Topper - All Engineering Streams )
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="SCET">
            <b>Gold Medal - Bachelor of Engineering</b> <br />( Institute Topper
            - Computer Engineering )
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="NASSCOM - Certificate of Excellence">
            <b>Shri Dewant Mehta IT Awards</b>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}

function Publications() {
  return (
    <>
      <Typography variant="h6">
        <b>Publications</b>
      </Typography>
      <List>
        <ListItem>
          <ListItemText secondary="SPRINGER LNNS book series">
            <b>
              Machine-Learning-Based Android Malware Detection Techniques—A
              Comparative Analysis
            </b>
            <br />
            <Link href="https://link.springer.com/chapter/10.1007/978-981-10-3932-4_19">
              Link
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="SPRINGER AISC book series">
            <b>Comparative Analysis of Android Malware Detection Techniques</b>
            <br />
            <Link href="https://link.springer.com/chapter/10.1007/978-981-10-1678-3_12">
              Link
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}
