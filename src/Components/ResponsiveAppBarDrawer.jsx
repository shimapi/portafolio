import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WhiteLogo from "../images/white-isologo-shirley-mallea.png"
import BlackLogo from "../images/black-isologo-shirley-mallea.png"
import LightDark from './LightDark';



const drawerWidth = 240;
const navItems = ['INICIO', 'SOBRE MI', 'PROYECTOS', 'CONTACTO', 'DESCARGAR CV'];

function ResponsiveAppBarDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
      component="img"
      sx={{
        height: 44,
        mr: 3,
      }}
      alt="Shirley Mallea Pizarro"
      src={BlackLogo}>
        </Box>
        <Typography variant="h6" sx={{ my: 3 }}> {/* LOGO EN DRAWER */}
          SHIRLEY
        </Typography>
      
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>


          <Box
                component="img"
                sx={{
                  height: 44,
                  display: { xs: 'flex', md: 'none' },
                  mr: 5
                }}
                alt="Shirley Mallea Pizarro"
                src={WhiteLogo}
            />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            mobile
          </Typography>









            {/* MARCA MENU DESKTOP */}


          <Box
                component="img"
                sx={{
                  height: 44,
                  display: { xs: 'none', md: 'flex' },
                  mr: 5
                }}
                alt="Shirley Mallea Pizarro"
                src={WhiteLogo}
            />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SHIRLEY desktop
          </Typography>


          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >


          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}> {/* MENU DESKTOP */}
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          {/* AQUI PONER LUZ/OSCURO*/}
          <LightDark />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>  {/*deja espacio dp de la barra de menú */}
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveAppBarDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveAppBarDrawer;