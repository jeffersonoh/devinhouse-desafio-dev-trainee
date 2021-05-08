import { useExames } from "../context/ExamesContext";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, MenuItem } from "@material-ui/core";
import { ConsultaSchema } from "../utils/validacao";
import { Formik, Form, Field } from "formik";
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

function FormConsulta({ id, consulta, handleClick }) {
	const classes = useStyles();
	const { exames } = useExames();

	return (
		<Formik
			initialValues={consulta}
			enableReinitialize={true}
			validationSchema={ConsultaSchema}
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
								name="cliente"
								label="Nome"
								variant="outlined"
								fullWidth
								required
								disabled
							/>
						</Grid>

						<Grid item xs={12}>
							<Field
								select
								component={TextField}
								name="exame"
								label="Exame"
								variant="outlined"
								fullWidth
								required
								disabled={id ? true : false}
							>
								{exames?.map((exame) => (
									<Field //
										component={MenuItem}
										key={exame.id}
										value={exame.nome}
									>
										{exame.nome}
									</Field>
								))}
							</Field>
						</Grid>

						<Grid item xs={6}>
							<Field
								name="data"
								label="Data"
								type="date"
								component={TextField}
								variant="outlined"
								fullWidth
								required
							/>
						</Grid>

						<Grid item xs={6}>
							<Field
								name="hora"
								label="Hora"
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
								Remover
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
							{id ? "Salvar" : "Adicionar"}
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default FormConsulta;
