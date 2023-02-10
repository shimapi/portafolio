import * as React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

export default function MyApp() {
  return (
    <Container>
      <Button variant="contained">Hello World</Button>
    </Container>
  );
}
