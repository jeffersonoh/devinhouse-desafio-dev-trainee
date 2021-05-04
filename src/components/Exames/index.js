import {
    useState,
    useEffect,
} from "react";

import {
    Grid,
} from "@material-ui/core";

import ExameCard from "./ExameCard";

import { getExames } from "utils/api";


const Exames = () => {

    const [exames, setExames] = useState([]);

    useEffect(() => {
	getExames().then(res => setExames(res.data));
    }, []);
    
    return (
	<Grid container
	      direction="row"
	      spacing={1}>
	    {
		exames.map(data => (
		    <Grid item
			  xs={12}
			  key={data.id}>
			<ExameCard data={data}/>
		    </Grid>
		))
	    }
	</Grid>
    );
};

export default Exames;
