import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import useStyles from "./useStyles";

function Header() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Grid item xs={12} sm={7}>
            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h4">Soft-Clinic</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              <Link to={"/clientes"}>
                <div className={classes.titleButton}>Clientes</div>
              </Link>
            </Button>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              <Link to={"/exames"}>
                <div className={classes.titleButton}>Exames</div>
              </Link>
            </Button>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              <Link to={"/agendamentos"}>
                <div className={classes.titleButton}>Agendamentos</div>
              </Link>
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Header;
