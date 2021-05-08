import {
    Typography,
    Grid,
    Box,
} from "@material-ui/core";

import {
    SPaper
} from "./styledComponents";


const ExameCard = (props) => {
    
    const { data } = props;
    
    return (
	<SPaper>

		<Grid container
		      justify="space-around">
		    
		    <Grid item xs={2}>

			<Box display="flex"
			     flexDirection="column">

			    <Typography variant="caption">ID</Typography>

			    <Typography>{data.id}</Typography>

			</Box>

		    </Grid>
		    
		    <Grid item xs={10}>

			<Box display="flex"
			     flexDirection="column">

			    <Typography variant="caption">Nome</Typography>

			    <Typography>{data.nome}</Typography>

			</Box>

		    </Grid>
		    
		</Grid>
		
	</SPaper>
    );
};

export default ExameCard;
