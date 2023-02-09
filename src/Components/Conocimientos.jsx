import * as React from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

export default function Conocimientos() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          gap: 3,
          justifyContent: 'space-between',
          display: 'flex',
          flexWrap: 'wrap',
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 1,
          mt:10,
          p:5
        }}
      >
        <Button variant="contained">HTML</Button>
        <Button variant="contained">CSS</Button>
        <Button variant="contained">FLEXBOX</Button>
        <Button variant="contained">GRID</Button>
        <Button variant="contained">MATERIAL UI</Button>
        <Button variant="contained">REACT</Button>
        <Button variant="contained">JS</Button>
        <Button variant="contained">GIT</Button>
        <Button variant="contained">GitHub</Button>
        <Button variant="contained">Firebase</Button>
        <Button variant="contained">JSON</Button>
        <Button variant="contained">Shopify</Button>
        <Button variant="contained">Responsive Design</Button>
        <Button variant="contained">SEO</Button>
        <Button variant="contained">Notion</Button>
        <Button variant="contained">Canva</Button>
        <Button variant="contained">Trello</Button>
        <Button variant="contained">Slack</Button>
        <Button variant="contained">UX/UI</Button>
        <Button variant="contained">REST APIs</Button>
        <Button variant="contained">npm</Button>
        <Button variant="contained">Liquid</Button>
        <Button variant="contained">Responsive web design from Figma/Photoshop</Button>
        <Button variant="contained">Adobe Suite</Button>
        <Button variant="contained">Notion</Button>

        {/*HTML5|CSS|JS|React|GIT| GitHub | Firebase | JSON | Shopify | Responsive Design | SEO | Responsive web design from Figma/Photoshop | Adobe Illustrator | Canva | Notion | Trello | Slack | UX/UI | REST APIs | Liquid*/}
      </Box>
    </Container>
  );
}
