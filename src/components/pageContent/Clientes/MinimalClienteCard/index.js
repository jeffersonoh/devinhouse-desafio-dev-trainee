import {
  Grid,
  Typography,
  Box,
} from "@material-ui/core";

import { SPaper } from "./styledComponents";

import { decorate } from "utils/cpf";


const MinimalClienteCard = (props) => {
  
  const { data, outlined } = props;
  
  return (
    <SPaper aria-label="cliente" variant={outlined ? "outlined" : "elevation"}>
      
      <Grid container justify="space-around">
	
	<Grid item xs={6}>
	  <Box display="flex" flexDirection="column">
	    <Typography variant="caption">Nome</Typography>
	    <Typography noWrap>{data.nome + " " + data.sobrenome}</Typography>
	  </Box>
	</Grid>
	
	<Grid item xs={6}>
	  <Box display="flex" justifyContent="flex-end">
	    <Box display="flex" flexDirection="column">
	      <Typography variant="caption">CPF</Typography>
	      <Typography noWrap>{decorate(data.cpf)}</Typography>
	    </Box>
	  </Box>
	</Grid>
      </Grid>
      
    </SPaper>
  );
};

export default MinimalClienteCard;
