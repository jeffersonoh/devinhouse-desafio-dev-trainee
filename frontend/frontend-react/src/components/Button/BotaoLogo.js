import React from "react";

import IconButton from "@material-ui/core/IconButton";
import HealingIcon from "@material-ui/icons/Healing";
import { Paper, Typography } from "@material-ui/core";

export default function BotaoLogo() {
  return (
    <IconButton color="primary" fontSize="large" component={Paper}>
      <HealingIcon />
      <Typography variant="h6">Sua Saúde</Typography>
    </IconButton>
  );
}
