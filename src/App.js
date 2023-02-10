import * as React from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBarDrawer from './Components/ResponsiveAppBarDrawer';
import Hola from './Components/Hola';
import Conocimientos from './Components/Conocimientos';
import SobreMi from './Components/SobreMi';
import Projects from './Components/Projects';
import Footer from './Components/Footer'; 
import ListRouter from './Components/ListRouter'; 


export default function MyApp() {
  return (
    <ScopedCssBaseline>
      <ResponsiveAppBarDrawer /> {/** menu */}

        <ListRouter />

      <CssBaseline /> {/** no me acuerdo, pero era importante */}
      <Hola />
      <Conocimientos/>
      <SobreMi/>
      <Projects/>
      <Footer/>
    </ScopedCssBaseline>
    
  );
}


