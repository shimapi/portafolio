import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  Toolbar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhiteLogo from "../images/white-isologo-shirley-mallea.png";
import BlackLogo from "../images/black-isologo-shirley-mallea.png";
import LightDark from "./LightDark";

const drawerWidth = 240;
const navItems = [
  "INICIO",
  "SOBRE MI",
  "PROYECTOS",
  "CONTACTO",
  "DESCARGAR CV",
];

function ResponsiveAppBarDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        sx={{
          height: 44,
          m: 3,
        }}
        alt="Shirley Mallea Pizarro"
        src={BlackLogo}
      ></Box>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              height: 44,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <a href="/">
              <img src={WhiteLogo} alt="Shirley Mallea Pizarro" height={44} />
            </a>
          </Box>

          <Box
            sx={{
              height: 44,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              mr: 3,
            }}
          >
            <a href="/">
              <img src={WhiteLogo} alt="Shirley Mallea Pizarro" height={44} />
            </a>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", lg: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SHIRLEY | portfolio
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          ></Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {" "}
            {/* MENU DESKTOP */}
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
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
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        {" "}
        {/*deja espacio dp de la barra de menú */}
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
