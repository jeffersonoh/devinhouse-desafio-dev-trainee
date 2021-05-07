import {
  Grid,
  Box,
  Typography,
} from "@material-ui/core";

import { SPaper } from "./styledComponents";

import { format, parseISO } from "date-fns";


const AgendamentoCard = (props) => {
  
  const { data, shortened } = props;
  
  return (
    <SPaper variant="outlined">
      
      <Grid container>
	
	<Grid item xs={shortened ? 6 : 4}>
	  <Typography variant="caption">Data</Typography>
	  <Typography>{format(parseISO(data.timestamp), "d/M/y")}</Typography>
	</Grid>
	
	<Grid item xs={shortened ? 6 : 4}>
	  <Box display="flex" justifyContent="center">
	    
	    <Box>
	      <Typography variant="caption">Horário</Typography>
	      <Typography>{format(parseISO(data.timestamp), "H:mm")}</Typography>
	    </Box>
	    
	  </Box>
	</Grid>
	
	<Grid item xs={shortened ? 12 : 4}>
	  <Box display="flex" justifyContent={shortened ? "center" : "flex-end"}>
	    
	    <Box>
	      <Typography variant="caption">Exame</Typography>
	      <Typography>{data.exame.nome}</Typography>
	    </Box>
	    
	  </Box>
	</Grid>
	
      </Grid>
      
    </SPaper>
  );
};

export default AgendamentoCard;
