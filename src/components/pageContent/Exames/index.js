import {
  useState,
  useEffect,
} from "react";

import {
  Grid,
  Typography,
} from "@material-ui/core";

import ExameCard from "./ExameCard";

import { Skeleton } from "@material-ui/lab";

import { getExames } from "utils/api";


const Exames = () => {
  
  const [exames, setExames] = useState(null);
  
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

      { exames
	? exames.map(data => (
	  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={data.id}>
	    <ExameCard data={data}/>
	  </Grid>
	))
	: new Array(11).fill(null).map((_, index) => (
	  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
	    <Skeleton variant="rect" height={67}/>
	  </Grid>
	))
      }
    </Grid>
  );
};

export default Exames;
