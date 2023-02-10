import * as React from 'react';
import {CssBaseline,ScopedCssBaseline} from '@mui/material';
import ResponsiveAppBarDrawer from './Components/ResponsiveAppBarDrawer';
/* import Hola from './Components/Hola';
import Conocimientos from './Components/Conocimientos';
import Projects from './Components/Projects'; */
import SobreMi from './Pages/SobreMi';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router';
import Contacto from './Pages/Contacto';
import Home from './Pages/Home';
import Proyectos from './Pages/Proyectos';
import DescargarCV from './Pages/DescargarCV';


export default function MyApp() {
  return (
    <ScopedCssBaseline>
      <ResponsiveAppBarDrawer /> {/** menu */}

<br/>
<br/>
<br/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Contacto" element={<Contacto/>}  />
        <Route path="Proyectos" element={<Proyectos/>} />
        <Route path="DescargarCV" element={<DescargarCV/>} />
        <Route path="SobreMi" element={<SobreMi/>} />
      </Routes>
      
      
      <CssBaseline /> {/** no me acuerdo, pero era importante */}
      <br/>
<br/>
<br/>
      <Footer/>
    </ScopedCssBaseline>
    
  );
}


