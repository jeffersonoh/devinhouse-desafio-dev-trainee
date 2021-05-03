import { Typography, makeStyles } from "@material-ui/core";

import { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => ({
  flex: {
    display: "flex",
    "align-items": "center",
    "flex-direction": "column",
  },
}));

const HomePage = ({}) => {
  const classes = useStyle();

  return (
    <div className={classes.flex}>
      <Typography variant="h4">
        Bem Vindo, efetue o Login ou Cadastro para continuar.
      </Typography>
    </div>
  );
};

export default HomePage;
