import * as React from 'react';
import Button from '@mui/material/Button';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { LogoAppBar } from './Components/LogoAppBar';


export default function MyApp() {
  return (
    <ScopedCssBaseline>
      <Button variant="outlined">Hello World</Button>


      <LogoAppBar />
    </ScopedCssBaseline>
    
  );
}


