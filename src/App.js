import * as React from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import CssBaseline from '@mui/material/CssBaseline';
import BasicGrid from './Components/BasicGrid';
import ResponsiveAppBarDrawer from './Components/ResponsiveAppBarDrawer';
import Hola from './Components/Hola';
import Conocimientos from './Components/Conocimientos';
import SobreMi from './Components/SobreMi';


export default function MyApp() {
  return (
    <ScopedCssBaseline>
      <ResponsiveAppBarDrawer /> {/** menu */}
      <CssBaseline /> {/** no me acuerdo, pero era importante */}
      <Hola />
      <Conocimientos/>
      <SobreMi/>
    </ScopedCssBaseline>
    
  );
}


