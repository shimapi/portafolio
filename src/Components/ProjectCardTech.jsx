import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

export default function ProjectCardTech() {
  return (
    <Card
      sx={{
        maxWidth: "md",
        my: 2,
        display: "inline-flex",
        flexFlow: "row wrap",
      }}
      raised={true}
    >
      <Box sx={{ display: "inline-flex", flexFlow: "row wrap" }}>
        <CardMedia
          component="img"
          height="400px"
          width="300px"
          image="./image-1.jpg"
          alt="Reserva de Hoteles"
          sx={{
            backgroundColor: "orange",
            height: "400px",
            maxWidth: { xs: "300px", md: "300px" },
            //   width: "300px",
            display: "block",
          }}
        />
        <CardContent
          sx={{
            backgroundColor: "yellow",
            height: "300px",
            maxWidth: { xs: "300px", md: "400px" },
            //maxWidth: "400px",
            display: "block",
          }}
        >
          <Typography variant="h5" component="div">
            Reserva de Hoteles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descripción del proyecto: Lizards are a widespread group of squamate
            reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
          <Typography variant="body3" color="text.secondary">
            <ul>
              <li>uno</li>
              <li>dos</li>
              <li>tres</li>
              <li>cuatro</li>
            </ul>
          </Typography>
          <Button
            variant="contained"
            sx={{
              my: 2,
            }}
          >
            Ver Detalles del proyecto
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}
