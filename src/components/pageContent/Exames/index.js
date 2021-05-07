import {
  useState,
  useEffect,
} from "react";

import {
  Grid,
  Typography,
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
      
      <Grid item xs={12}>
	<Typography variant="h4">Exames</Typography>
      </Grid>
      {
	exames.map(data => (
	  <Grid item
		xs={12}
		md={6}
		lg={4}
		xl={3}
		key={data.id}>
	    <ExameCard data={data}/>
	  </Grid>
	))
      }
    </Grid>
  );
};

export default Exames;
