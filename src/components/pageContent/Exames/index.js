import {
  useState,
  useEffect,
} from "react";

import {
  Grid,
  Typography,
  Box,
} from "@material-ui/core";


import ExameCard from "./ExameCard";

import {
	Skeleton,
	Pagination,
	PaginationItem,
} from "@material-ui/lab";

import { useRouteMatch, Link } from "react-router-dom";

import { getExamesPage as apiGetExamesPage } from "utils/api";


const Exames = () => {
  
  const match = useRouteMatch("/exames/:page");
  const [page, setPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [exames, setExames] = useState(null);

  useEffect(() => {
	  setPage(match ? parseInt(match.params.page) : 1);
  }, []);
  
  const getExamesPage = () => {
	  if (page !== null) {
		  setExames(null)
	      apiGetExamesPage({ page: page - 1, size: 17 })
		.then(res => {
		  setExames(res.data.content);
		  setTotalPages(res.data.totalPages);
		})
	  }
  };

  useEffect(getExamesPage, [page]);


  
  return (
    <Grid container spacing={2}>
      
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

      <Grid item xs={12}>
	  <Box display="flex"
	  justifyContent="center">
	  <Pagination page={page} count={totalPages}
	  onChange={(_, value) => setPage(value)}
	  variant="outlined"
	  renderItem={(props) => (
		  <PaginationItem
		  component={Link}
		  to={{
			pathname: `/exames/${props.page}`,
			key: parseInt(props.page),
		  }}
		  {...props}
		  />
	  )}/>
	  </Box>
      </Grid>

    </Grid>
  );
};

export default Exames;
