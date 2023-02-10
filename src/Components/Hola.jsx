import * as React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import MujerProgramando from "../images/mujer-programando.png";

export default function Hola() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 1,
              p: 5,
              mt: 5,
              maxWidth: { xs: "80%", md: "60%" },
            }}
          >
            <Typography variant="h4" sx={{ color: "text.secondary" }}>
              Hola, mundo!
            </Typography>
            <Typography variant="h2" sx={{ color: "text.primary" }}>
              Soy Shirley, Web Developer
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "success.dark",
                fontStyle: "italic",
                fontWeight: "bold",
                my: 2,
                maxWidth: 500,
              }}
            >
              👩‍💻 Me encanta aprender, soy curiosa y amo explorar. Me encanta la
              naturaleza.🍃
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: 380,
              }}
            >
              <Button
                variant="contained"
                href="public/CV-Shirley-Mallea.pdf"
                size="small"
                target={"_blank"}
              >
                Descargar CV
              </Button>
              <Button
                variant="outlined"
                size="small"
                target={"_blank"}
                href="https://github.com/shimapi"
              >
                GITHUB
              </Button>
              <Button
                variant="outlined"
                size="small"
                target={"_blank"}
                href="https://www.linkedin.com/in/shirleymallea/"
              >
                LINKEDIN
              </Button>
              {/** <Button variant="outlined" size="small" target={'_blank'}
                href="https://www.instagram.com/shirley.devv/">INSTAGRAM</Button>
                */}
              <Button
                variant="outlined"
                size="small"
                target={"_blank"}
                href="mailto:shirley.mallea@gmail.com"
              >
                MAIL
              </Button>
            </Box>
          </Box>

          <Box
            component="img"
            sx={{
              maxWidth: { xs: "20%", md: "40%" },
              maxHeight: { xs: "20%", md: "40%" },
              display: { xs: "none", md: "flex" },
            }}
            alt="Shirley Mallea Pizarro"
            src={MujerProgramando}
          ></Box>
        </Box>
      </Container>
    </div>
  );
}
