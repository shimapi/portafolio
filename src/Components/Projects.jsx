import * as React from "react";
import { Container } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ProjectCardTech from "./ProjectCardTech";

export default function Projects() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ProjectCardTech />
      <ProjectCard />
      <ProjectCard />
      <ProjectCardTech />
      <ProjectCardTech />
      <ProjectCard />
    </Container>
  );
}
