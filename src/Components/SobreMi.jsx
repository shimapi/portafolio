import * as React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function SobreMi() {
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Container>
      <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 1,
            p: 5,
            mt: 5,
            flexGrow: 1
          }}>
        
        <Typography variant="h5">
          Sobre mí:
        </Typography>

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt non dolor eget dictum. Vestibulum vitae diam eu massa pretium consectetur. Donec lacinia ex aliquet ornare pulvinar. Nulla condimentum quam sed nisl consectetur dignissim. Quisque varius magna ac vestibulum mollis. Maecenas varius faucibus lorem ac molestie. Donec et vestibulum massa. 

v
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>IMAGEN</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>IMAGEN</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>Sed sed erat ac tellus porttitor imperdiet vel ut ex. Etiam convallis, nunc ac ullamcorper venenatis, tellus nisl tempor velit, sit amet dignissim est justo sed eros. Curabitur semper libero non mauris posuere venenatis. Nunc nec mi lorem. Fusce massa enim, rutrum ut facilisis in, pulvinar eget neque.</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
  );
}
