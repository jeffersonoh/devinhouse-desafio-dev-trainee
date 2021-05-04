import {
    Typography,
    Grid,
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
		    
		    <Grid item>
			<Typography variant="caption">ID</Typography>
			<Typography>{data?.id}</Typography>
		    </Grid>
		    
		    <Grid item>
			<Typography variant="caption">Nome</Typography>
			<Typography>{data?.nome}</Typography>
		    </Grid>
		    
		</Grid>
		
	</SPaper>
    );
};

export default ExameCard;
