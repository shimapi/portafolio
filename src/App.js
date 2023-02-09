import * as React from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBarDrawer from './Components/ResponsiveAppBarDrawer';
import Hola from './Components/Hola';
import Conocimientos from './Components/Conocimientos';
import SobreMi from './Components/SobreMi';
import Projects from './Components/Projects';
import ProjectCardTech from './Components/ProjectCardTech';


export default function MyApp() {
  return (
    <ScopedCssBaseline>
      <ResponsiveAppBarDrawer /> {/** menu */}
      <CssBaseline /> {/** no me acuerdo, pero era importante */}

      <ProjectCardTech/> {/* Trabajando en la CARD */}

      <Hola />
      <Conocimientos/>
      <SobreMi/>
      <Projects/>
    </ScopedCssBaseline>
    
  );
}


