import React from "react";
import { Collapse, Divider, List, makeStyles } from "@material-ui/core";
import ListItemConsulta from "./ListItemConsulta";

const useStyles = makeStyles((theme) => ({
	list: {
		margin: 0,
		padding: 0,
	},
}));

function ListConsulta({ expanded, consultas, idCliente }) {
	const classes = useStyles();

	return (
		<Collapse in={expanded} timeout="auto" unmountOnExit>
			<List className={classes.list} dense>
				{consultas.length > 0 &&
					consultas.map((consulta) => (
						<React.Fragment key={consulta.id}>
							<Divider />
							<ListItemConsulta idCliente={idCliente} consulta={consulta} />
						</React.Fragment>
					))}
			</List>
		</Collapse>
	);
}

export default ListConsulta;
