import * as React from "react";
import { Button, Container } from "@mui/material";
import BasicGrid from "./BasicGrid";

export default function Footer() {
  return (
    <Container
      sx={{ maxWidth: "100%", minHeight: "300px", p: 3, bgcolor: "#ccc" }}
    >
      <BasicGrid />
      <Button variant="contained" size="small" sx={{ m: 1 }}>
        asdasdasdasdasdasd
      </Button>
      <Button variant="contained" size="small" sx={{ m: 1 }}>
        asdasdasdasdasdasd
      </Button>
      <Button variant="contained" size="small" sx={{ m: 1 }}>
        asdasdasdasdasdasd
      </Button>
      <Button variant="contained" size="small" sx={{ m: 1 }}>
        asdasdasdasdasdasd
      </Button>
      <Button variant="contained" size="small" sx={{ m: 1 }}>
        asdasdasdasdasdasd
      </Button>
      <Button variant="contained" size="small" sx={{ m: 1 }}>
        asdasdasdasdasdasd
      </Button>
      <Button variant="contained" size="small" sx={{ m: 1 }}>
        asdasdasdasdasdasd
      </Button>
      <Button variant="contained" size="small" sx={{ m: 1 }}>
        asdasdasdasdasdasd
      </Button>
      <Button variant="contained" size="small" sx={{ m: 1 }}>
        asdasdasdasdasdasd
      </Button>
    </Container>
  );
}
