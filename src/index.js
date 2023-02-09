import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import { theme } from './theme';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import BasicGrid from './Components/BasicGrid';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <ResponsiveAppBar />
    <CssBaseline />
    <BasicGrid />
    <App />
  </ThemeProvider>,
);
