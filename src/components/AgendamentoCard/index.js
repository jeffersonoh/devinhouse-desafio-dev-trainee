import {
    Grid,
    Box,
    Typography,
} from "@material-ui/core";

import {
    SPaper,
} from "./styledComponents";

import { format, parseISO } from "date-fns";

const AgendamentoCard = (props) => {
    
    const { data } = props;
    
    return (
	<SPaper variant="outlined">
	    <Grid container>
		
		<Grid item xs={4}>
		    <Typography variant="caption">Data</Typography>
		    <Typography>{format(parseISO(data.timestamp),
					"d/M/y")}</Typography>
		</Grid>
		
		<Grid item xs={4}>
		    <Box display="flex"
			 justifyContent="center">
			<Box>
			    <Typography variant="caption">Horário</Typography>
			    <Typography>{format(parseISO(data.timestamp),
						"H:mm")}</Typography>
			</Box>
		    </Box>
		</Grid>
		
		<Grid item xs={4}>
		    <Box display="flex"
			 justifyContent="flex-end">
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
