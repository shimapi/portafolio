import * as React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import LightDarkToggle from "../Components/LightDarkToggle";

export default function Contacto() {
  return (
    <Container maxWidth="md">
      <Button variant="contained">Contactssso</Button>

      <LightDarkToggle />
    </Container>
  );
}
