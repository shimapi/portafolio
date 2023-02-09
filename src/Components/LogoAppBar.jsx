import { AppBar, Box, Toolbar } from "@mui/material";
import Logo2 from "../images/favicon.png"

export  function LogoAppBar() {
  return (
    <AppBar position="static">
        <Toolbar>
            <Box
                component="img"
                sx={{height: 64}}
                alt="Shirley Mallea Pizarro"
                src={Logo2}
            />
        </Toolbar>
    </AppBar>
  );
}

