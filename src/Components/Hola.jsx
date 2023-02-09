

import * as React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

export default function Hola() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 1,
            p: 5,
            mt: 5,
            //display: 'flex'
          }}>
          <Typography variant="h4" sx={{ color: 'text.secondary' }}>
            Hola, mundo!
          </Typography>
          <Typography variant="h2" sx={{ color: 'text.primary' }}>
             Soy Shirley, Web Developer
          </Typography>
      
          <Typography variant="h6"
            sx={{
              color: 'success.dark',
              fontStyle: 'italic',
              fontWeight: 'bold',
              mx: 0.5,
              maxWidth:500,
            }}
          >
          En constante aprendizaje. Capaz de trabajar en equipo y personalmente de forma organizada.
          </Typography>
          
          <Box sx={{  display: 'block' }}>
            GITHUB LINKEDIN INSTAGRAM MAIL
          </Box>

          <Button variant="contained" >leer más...</Button>
        </Box>

      </Container>

    </div>
  );
}




