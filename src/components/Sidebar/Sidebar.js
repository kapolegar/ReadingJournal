import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#282c34", height: "100px" }}>
        <Toolbar sx={{ height: "100%", display: "flex", alignItems: "center" }}>
          <IconButton edge="start" color="inherit" onClick={() => setOpen(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Button
            component={Link}
            to="/"
            sx={{
              textTransform: "none", 
              fontFamily: "'Playfair Display', serif",
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "3px",
              color: "white",
              // "&:hover": { color: "#ccc" },
            }}
          >
            <img src="/logo.png" alt="Ícone de livro" style={{ width: "30px", height: "auto", marginRight: "20px"}} />
            Reading Journal
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, bgcolor: "#282c34", height: "100vh", px: 2, py: 2 }}>
          <List sx={{ width: 250, bgcolor: "#282c34", color: "white" }}>
            {[
              { text: "Sobre", path: "/about" },
              { text: "Cadastrar", path: "/add" },
              { text: "Lista de Livros", path: "/books" },
            ].map((item) => (
              <ListItem
                key={item.text}
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemText disableTypography
                  primary={
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "normal",
                        fontFamily: "'Lora', serif",
                        color: "white",
                        padding: "3px",
                      }}
                    >
                      {item.text}
                    </Typography>
                  } />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar;