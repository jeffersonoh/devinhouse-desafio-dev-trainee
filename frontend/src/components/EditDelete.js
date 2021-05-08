import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
	group: {
		display: "flex",
		alignItems: "center",
		[theme.breakpoints.down("xs")]: {
			flexWrap: "wrap-reverse",
			width: "min-content",
		},
	},
	button: {
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
	delete: {
		"&:hover": {
			color: theme.palette.error.main,
		},
	},
	faIcon: {
		fontSize: "1rem",
	},
}));

function EditDelete({ type, handleClick }) {
	const classes = useStyles();

	return (
		<div className={classes.group}>
			{type === "button" && (
				<>
					<Button
						className={classes.button}
						size="small"
						variant="outlined"
						onClick={handleClick.editar}
					>
						Editar
					</Button>
					<Button
						className={`${classes.button} ${classes.delete}`}
						size="small"
						variant="outlined"
						onClick={handleClick.excluir}
					>
						Excluir
					</Button>
				</>
			)}

			{type === "icon" && (
				<>
					<IconButton className={classes.button} onClick={handleClick.editar}>
						<FontAwesomeIcon className={classes.faIcon} icon={faPen} />
					</IconButton>

					<IconButton
						className={`${classes.button} ${classes.delete}`}
						onClick={handleClick.excluir}
					>
						<FontAwesomeIcon className={classes.faIcon} icon={faTrash} />
					</IconButton>
				</>
			)}
		</div>
	);
}

export default EditDelete;
