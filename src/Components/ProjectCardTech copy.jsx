import * as React from "react";
/* import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material"; */

export default function ProjectCardTech() {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        height: "400px",
        width: "300px",
        display: "inline-flex",
        flexFlow: "row wrap",
      }}
    >
      CONTENEDOR
      <div
        style={{
          backgroundColor: "yellow",
          height: "300px",
          width: "150px",
          display: "block",
        }}
      >
        FOTO
      </div>
      <div
        style={{
          backgroundColor: "purple",
          height: "300px",
          width: "200px",
          display: "block",
        }}
      >
        TEXTO
      </div>
    </div>
  );
}
