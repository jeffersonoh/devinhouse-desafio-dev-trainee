import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { api } from "../services/api";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Container, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import FormCliente from "../components/FormCliente";
import { Snackbar } from "@material-ui/core";
import { Alert } from "../utils/index";

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: theme.spacing(4, 0, 4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		marginTop: theme.spacing(3),
		width: "100%", // Fix IE 11 issue.
	},
	button: {
		margin: theme.spacing(3, 1),
		[theme.breakpoints.down("xs")]: {
			margin: theme.spacing(2, 0, 0),
			width: "200px",
		},
	},
	buttongroup: {
		margin: theme.spacing(0, -1),
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		flexDirection: "row",
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(1),
			flexDirection: "column-reverse",
		},
	},
	delbutton: {
		color: "white",
		backgroundColor: theme.palette.error.light,
		"&:hover": { backgroundColor: theme.palette.error.main },
	},
}));

function CadastroCliente() {
	const history = useHistory();
	const classes = useStyles();

	const { id } = useParams();

	const [clienteAtual, setClienteAtual] = useState({
		nome: "",
		cpf: "",
		dataNascimento: new Date().toISOString().slice(0, 10),
	});

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (id) buscarCliente();
	}, []);

	const buscarCliente = async () => {
		const response = await api
			.buscarClientePeloID(parseInt(id))
			.then((response) => response)
			.catch((error) => error?.response);
		// console.log(response);

		if (!response) {
			setMessage("O servidor não respondeu a solicitação.");
			setOpen(true);
		}

		if (response.status === 200) {
			setClienteAtual(response.data);
		} else {
			setMessage(response.data.message);
			setOpen(true);
		}
	};

	const salvarCliente = async (values) => {
		const response = id
			? await api
					.atualizarCliente(id, values)
					.then((response) => response)
					.catch((error) => error?.response)
			: await api
					.cadastrarCliente(values)
					.then((response) => response)
					.catch((error) => error?.response);
		// console.log(response);

		const status = response?.status;

		if (!status) {
			setMessage("O servidor não respondeu a solicitação.");
		} else {
			if (status === 201) {
				setMessage("Cadastro efetuado com sucesso.");
			} else if (status === 200) {
				setMessage("Cadastro atualizado com sucesso.");
			} else {
				setMessage(response.data.message);
			}
		}
		setOpen(true);
	};

	const excluirCliente = async () => {
		const confirmaExclusao = window.confirm(
			"Tem certeza de que deseja excluir este cadastro?\nEssa ação não poderá ser desfeita!"
		);

		if (confirmaExclusao) {
			const response = await api
				.excluirCliente(id)
				.then((response) => response)
				.catch((error) => error?.response);
			console.log(response);

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

	const handleCancelar = () => {
		history.push("/");
	};

	return (
		<>
			<Container component="main" maxWidth="xs">
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<FontAwesomeIcon icon={faUser} />
					</Avatar>

					<Typography component="h1" variant="h5">
						Formulário de Cliente
					</Typography>

					<FormCliente
						id={id}
						cliente={clienteAtual}
						handleClick={{
							salvar: salvarCliente,
							excluir: excluirCliente,
							cancelar: handleCancelar,
						}}
					/>
				</div>
			</Container>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={() => {
					setOpen(false);
					history.push("/");
				}}
			>
				<Alert severity="info">{message}</Alert>
			</Snackbar>
		</>
	);
}

export default CadastroCliente;
