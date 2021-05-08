import { Button, Grid, makeStyles } from "@material-ui/core";
import { ClienteSchema } from "../utils/validacao";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";

const useStyles = makeStyles((theme) => ({
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

function FormCliente({ id, cliente, handleClick }) {
	const classes = useStyles();

	return (
		<Formik
			initialValues={cliente}
			enableReinitialize={true}
			validationSchema={ClienteSchema}
			onSubmit={(values, { setSubmitting }) => {
				handleClick.salvar(values).then(() => setSubmitting(false));
			}}
		>
			{({ submitForm, isSubmitting }) => (
				<Form className={classes.form}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Field
								component={TextField}
								name="nome"
								label="Nome Completo"
								variant="outlined"
								fullWidth
								required
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Field
								name="cpf"
								label="CPF (apenas números)"
								component={TextField}
								variant="outlined"
								fullWidth
								required
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Field
								name="dataNascimento"
								label="Data de Nascimento"
								type="date"
								component={TextField}
								variant="outlined"
								fullWidth
								required
							/>
						</Grid>
					</Grid>

					<div className={classes.buttongroup}>
						{id && (
							<Button
								className={`${classes.button} ${classes.delbutton}`}
								variant="contained"
								disabled={isSubmitting}
								fullWidth
								onClick={handleClick.excluir}
							>
								Excluir
							</Button>
						)}

						<Button
							className={classes.button}
							variant="contained"
							disabled={isSubmitting}
							fullWidth
							onClick={handleClick.cancelar}
						>
							Cancelar
						</Button>

						<Button
							className={classes.button}
							variant="contained"
							color="primary"
							disabled={isSubmitting}
							fullWidth
							onClick={submitForm}
						>
							{id ? "Salvar" : "Cadastrar"}
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default FormCliente;
