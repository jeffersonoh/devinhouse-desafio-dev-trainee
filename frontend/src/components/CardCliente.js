import { useState } from "react";
import { useHistory } from "react-router";
import { api } from "../services/api";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Paper, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { cpfMask, dateMask } from "../utils";
import EditDelete from "./EditDelete";
import ListConsulta from "./ListConsulta";
import { Snackbar } from "@material-ui/core";
import { Alert } from "../utils/index";
const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(2, 0),
		maxWidth: 1024,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down("sm")]: {
			maxWidth: 720,
		},
	},
	card: {
		padding: theme.spacing(2),
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(1),
			flexDirection: "column",
		},
	},
	info: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		"& $avatar": {
			marginRight: "8px",
		},
		"& $text": {
			width: "calc(100%/3)",
			padding: theme.spacing(0, 1),
		},
		[theme.breakpoints.down("xs")]: {
			alignItems: "flex-start",
		},
	},
	avatar: {
		backgroundColor: theme.palette.primary.main,
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	text: {},
	buttongroup: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	button: {
		lineHeight: 1.25,

		[theme.breakpoints.down("sm")]: {
			fontSize: "0.75rem",
		},
		"& $faIcon": {
			margin: "8px",
		},
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
	faIcon: {},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
}));

function CardCliente({ cliente }) {
	const history = useHistory();
	const classes = useStyles();

	const [expanded, setExpanded] = useState(false);
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");

	const editarCliente = () => {
		history.push("/clientes/" + cliente.id);
	};

	const excluirCliente = async () => {
		const confirmaExclusao = window.confirm(
			"Tem certeza de que deseja excluir este cadastro?\nEssa ação não poderá ser desfeita!"
		);

		if (confirmaExclusao) {
			const response = await api
				.excluirCliente(cliente.id)
				.then((response) => response)
				.catch((error) => error?.response);
			// console.log(response);

			const status = response?.status;

			if (!status) {
				setMessage("O servidor não respondeu a solicitação.");
			} else {
				if (status === 200) {
					setMessage("Cadastro excluído com sucesso.");
				} else {
					setMessage(response.data.message);
				}
			}
			setOpen(true);
		}
	};

	const exibirConsultasAgendadas = () => {
		setExpanded(!expanded);
	};

	const agendarConsulta = () => {
		history.push("/clientes/" + cliente.id + "/consulta");
	};

	return (
		<>
			<Paper className={classes.root}>
				<div className={classes.card}>
					<div className={classes.info}>
						<Avatar className={classes.avatar}>
							<FontAwesomeIcon icon={faUser} />
						</Avatar>

						<Typography className={classes.text} variant="caption">
							Nome Completo<Typography color="primary">{cliente.nome}</Typography>
						</Typography>

						<Typography className={classes.text} variant="caption">
							CPF
							<Typography color="primary">{cpfMask(cliente.cpf)}</Typography>
						</Typography>

						<Typography className={classes.text} variant="caption">
							Data de Nascimento
							<Typography color="primary">{dateMask(cliente.dataNascimento)}</Typography>
						</Typography>

						<div className={classes.buttongroup}>
							<EditDelete
								type={"icon"}
								handleClick={{ excluir: excluirCliente, editar: editarCliente }}
							/>
						</div>
					</div>

					<div className={classes.buttongroup}>
						<Button className={classes.button} size="small" onClick={agendarConsulta}>
							Agendar Consulta
							<FontAwesomeIcon className={classes.faIcon} icon={faCalendarAlt} />
						</Button>

						<Button
							className={classes.button}
							size="small"
							onClick={exibirConsultasAgendadas}
							disabled={cliente.consultasAgendadas.length === 0}
						>
							Consultas Agendadas
							<FontAwesomeIcon
								className={`${classes.expand} ${expanded && classes.expandOpen} ${
									classes.faIcon
								}`}
								icon={faAngleDown}
							/>
						</Button>
					</div>
				</div>

				<ListConsulta
					expanded={expanded}
					consultas={cliente.consultasAgendadas}
					idCliente={cliente.id}
				/>
			</Paper>

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

export default CardCliente;
