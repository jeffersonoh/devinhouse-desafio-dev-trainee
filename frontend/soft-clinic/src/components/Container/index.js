import React from "react";

import { Grid, Paper } from "@material-ui/core";
import useStyles from "./useStyles";

export default function Container({ children }) {
  const classes = useStyles();
  return (
    <>
      <Paper variant="outlined" className={classes.root}>
        <Grid container alignItems="stretch" spacing={2}>
          {children}
        </Grid>
      </Paper>
    </>
  );
}
