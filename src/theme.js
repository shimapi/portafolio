import { green, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


export const theme = createTheme(

{
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    otherColor: {
      main: "#ccc",
    }
  }
}

/* 
  {"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"#fff","default":"#fafafa"},"primary":{"light":"#7986cb","main":"rgba(189, 16, 224, 1)","dark":"rgba(189, 16, 224, 1)","contrastText":"#fff"},"secondary":{"light":"#ff4081","main":"#f50057","dark":"#c51162","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}
 */
);
