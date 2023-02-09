import * as React from 'react';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Conocimientos() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          gap: 3,
          justifyContent: 'center',
          alignContent: 'space-around',
          display: 'flex',
          flexWrap: 'wrap',
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 1,
          mt:10,
          p:5
        }}
      >

        <Typography variant="h5">
          Conocimientos:
        </Typography>

        <Button variant="outlined">HTML</Button>
        <Button variant="outlined">CSS</Button>
        <Button variant="outlined">FLEXBOX</Button>
        <Button variant="outlined">GRID</Button>
        <Button variant="outlined">MATERIAL UI</Button>
        <Button variant="outlined">REACT</Button>
        <Button variant="outlined">JS</Button>
        <Button variant="outlined">GIT</Button>
        <Button variant="outlined">GitHub</Button>
        <Button variant="outlined">Firebase</Button>
        <Button variant="outlined">JSON</Button>
        <Button variant="outlined">Shopify</Button>
        <Button variant="outlined">Responsive Design</Button>
        <Button variant="outlined">SEO</Button>
        <Button variant="outlined">Notion</Button>
        <Button variant="outlined">Canva</Button>
        <Button variant="outlined">Trello</Button>
        <Button variant="outlined">Slack</Button>
        <Button variant="outlined">UX/UI</Button>
        <Button variant="outlined">REST APIs</Button>
        <Button variant="outlined">Node JS</Button>
        <Button variant="outlined">Liquid</Button>
        <Button variant="outlined">Responsive web design from Figma/Photoshop</Button>
        <Button variant="outlined">Adobe Suite</Button>
        <Button variant="outlined">Notion</Button>

        {/*HTML5|CSS|JS|React|GIT| GitHub | Firebase | JSON | Shopify | Responsive Design | SEO | Responsive web design from Figma/Photoshop | Adobe Illustrator | Canva | Notion | Trello | Slack | UX/UI | REST APIs | Liquid*/}
      </Box>
    </Container>
  );
}
