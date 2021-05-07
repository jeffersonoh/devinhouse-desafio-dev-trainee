import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

function MenuHome() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        MENU
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Link to={{ pathname: "/exames" }}>
          <MenuItem>EXAMES</MenuItem>
        </Link>
        <Link to={{ pathname: "/agenda" }}>
          <MenuItem>AGENDA</MenuItem>
        </Link>
        <Link to={{ pathname: "/listagem/clientes" }}>
          <MenuItem>CLIENTES</MenuItem>
        </Link>
        <Link to={{ pathname: "/novo/cliente" }}>
          <MenuItem>NOVO CLIENTES</MenuItem>
        </Link>
      </Menu>
    </>
  );
}
export default MenuHome;
