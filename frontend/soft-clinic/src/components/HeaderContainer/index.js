import React, { useState } from "react";

import { Button, Grid, Paper, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./useStyles";

export default function HeaderContainer({
  children,
  busca,
  helperText,
}) {
  const [termoBusca, setTermoBusca] = useState('')
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Grid className={classes.root} item xs={8} sm={12} md={4} lg={4}xl={6} style={{ display: "flex" }}>
          <TextField
            fullWidth
            label="Busca"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            helperText={helperText}
          />
          <Button onClick={()=> busca(termoBusca)}>
            <SearchIcon variant="outlined" position="end" />
          </Button>
        </Grid>
        <Grid item xs={4} 
        // style={{ position: "absolute", left: "80%" }}
        >
          {children}
        </Grid>
      </Paper>
    </>
  );
}
