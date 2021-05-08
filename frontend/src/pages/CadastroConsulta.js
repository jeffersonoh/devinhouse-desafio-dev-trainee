import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { api } from "../services/api";
import { useExames } from "../context/ExamesContext";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Container, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { timeMask } from "../utils";
import FormConsulta from "../components/FormConsulta";
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

function CadastroConsulta() {
	const history = useHistory();
	const classes = useStyles();
	const { exames } = useExames();

	const { idCliente, idConsulta } = useParams();

	const [consultaAtual, setConsultaAtual] = useState({
		data: "",
		hora: "",
		exame: "",
		cliente: "",
	});

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		buscarCliente();
	}, []);

	const buscarCliente = async () => {
		const response = await api
			.buscarClientePeloID(parseInt(idCliente))
			.then((response) => response)
			.catch((error) => error?.response);
		// console.log(response);

		if (!response) {
			setMessage("O servidor não respondeu a solicitação.");
			setOpen(true);
		}

		if (response.status !== 200) {
			setMessage("Nenhum cliente encontrado com o ID informado.");
			setOpen(true);
		}

		const cliente = response.data;
		const consulta = cliente.consultasAgendadas.find((c) => c.id === parseInt(idConsulta));

		if (idConsulta && !consulta) {
			setMessage("Nenhuma consulta encontrada com o ID informado.");
			setOpen(true);
		}

		const hoje = new Date();
		setConsultaAtual({
			data: consulta?.data || hoje.toISOString().slice(0, 10),
			hora: consulta?.hora ? timeMask(consulta?.hora) : "",
			exame: consulta?.exame?.nome || "",
			cliente: cliente.nome,
		});
	};

	const salvarConsulta = async (values) => {
		const consulta = { data: values.data, hora: values.hora };

		if (!idConsulta) {
			const exame = exames.find((exame) => exame.nome === values.exame);
			consulta.exame = exame;
		}

		const response = idConsulta
			? await api
					.atualizarConsulta(idCliente, idConsulta, consulta)
					.then((response) => response)
					.catch((error) => error?.response)
			: await api
					.adicionarConsulta(idCliente, consulta)
					.then((response) => response)
					.catch((error) => error?.response);
		// console.log(response);

		const status = response?.status;

		if (!status) {
			setMessage("O servidor não respondeu a solicitação.");
		} else {
			if (status === 201) {
				setMessage("Consulta adicionada com sucesso.");
			} else if (status === 200) {
				setMessage("Consulta atualizada com sucesso.");
			} else {
				setMessage(response.data.message);
			}
		}
		setOpen(true);
	};

	const excluirConsulta = async () => {
		const confirmaExclusao = window.confirm(
			"Tem certeza de que deseja remover a consulta?\nEssa ação não poderá ser desfeita!"
		);

		if (confirmaExclusao) {
			const response = await api
				.removerConsulta(idCliente, idConsulta)
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

	const handleCancelar = () => {
		history.push("/");
	};

	return (
		<>
			<Container component="main" maxWidth="xs">
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<FontAwesomeIcon icon={faNotesMedical} />
					</Avatar>

					<Typography component="h1" variant="h5">
						Formulário de Consulta
					</Typography>

					<FormConsulta
						id={idConsulta}
						consulta={consultaAtual}
						handleClick={{
							salvar: salvarConsulta,
							excluir: excluirConsulta,
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

export default CadastroConsulta;
