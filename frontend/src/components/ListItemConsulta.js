import { useState } from "react";
import { useHistory } from "react-router";
import { api } from "../services/api";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { dateMask, timeMask } from "../utils";
import EditDelete from "./EditDelete";
import { Snackbar } from "@material-ui/core";
import { Alert } from "../utils/index";

const useStyles = makeStyles((theme) => ({
	row: {
		padding: "6px 12px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		"&:hover": {
			backgroundColor: theme.palette.action.hover,
		},
	},
	rowinfo: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
		},
	},
	info: {
		display: "flex",
		alignItems: "center",
		width: "100%",
	},
	faIcon: {
		fontSize: "1rem",
		margin: "4px 8px",
	},
	text: {
		margin: "2px 4px",
	},
}));

function ListItemConsulta({ idCliente, consulta }) {
	const history = useHistory();
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");

	const handleEditar = () => {
		history.push("/clientes/" + idCliente + "/consulta/" + consulta.id);
	};

	const handleExcluir = async () => {
		const confirmaExclusao = window.confirm(
			"Tem certeza de que deseja remover a consulta?\nEssa ação não poderá ser desfeita!"
		);

		if (confirmaExclusao) {
			const response = await api
				.removerConsulta(idCliente, consulta.id)
				.then((response) => response)
				.catch((error) => error?.response);
			// console.log(response);

			const status = response?.status;

			if (!status) {
				setMessage("O servidor não respondeu a solicitação.");
			} else {
				if (status === 200) {
					setMessage("Consulta excluída com sucesso.");
				} else {
					setMessage(response.data.message);
				}
			}
			setOpen(true);
		}
	};

	return (
		<>
			<div className={classes.row}>
				<div className={classes.rowinfo}>
					<div className={classes.info}>
						<FontAwesomeIcon className={classes.faIcon} icon={faClock} />
						<Typography className={classes.text}>{dateMask(consulta.data)}</Typography>
						<Typography className={classes.text}>{timeMask(consulta.hora)}</Typography>
					</div>

					<div className={classes.info}>
						<FontAwesomeIcon className={classes.faIcon} icon={faStethoscope} />
						<Typography className={classes.text}>Exame:</Typography>
						<Typography className={classes.text}>{consulta.exame.nome}</Typography>
					</div>
				</div>

				<EditDelete type={"icon"} handleClick={{ editar: handleEditar, excluir: handleExcluir }} />
			</div>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={() => {
					setOpen(false);
					history.go(0);
				}}
			>
				<Alert severity="info">{message}</Alert>
			</Snackbar>
		</>
	);
}

export default ListItemConsulta;
