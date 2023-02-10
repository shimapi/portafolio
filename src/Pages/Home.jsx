import * as React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import Projects from "../Components/Projects";
import Conocimientos from "../Components/Conocimientos";
import SobreMi from "../Components/SobreMi";
import Hola from "./Hola";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Button variant="contained">Home</Button>
      <Hola />
      <Conocimientos />
      <SobreMi />
      <Projects />
    </Container>
  );
}
