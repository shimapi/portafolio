import * as React from 'react';
import { Container } from '@mui/material';
import ProjectCard  from './ProjectCard'


export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ flexWrap:'wrap', display:'flex', justifyContent:'space-between'}}>

      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />

    </Container>
  );
}
