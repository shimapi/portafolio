import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import ToggleColorMode from './Components/LightDarkToggle';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <ToggleColorMode/>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
