import { useState } from "react";
import { useHistory } from "react-router";
import { fade, InputBase, makeStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		width: 200,
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
	},
}));

function InputBusca() {
	const classes = useStyles();
	const history = useHistory();

	const [busca, setBusca] = useState("");

	const handleChange = (e) => {
		setBusca(e.target.value);
	};

	const handleKeyPress = (e) => {
		if (e.keyCode === 13) {
			setBusca("");
			history.push("/clientes/buscar?cpf=" + busca.replace(/\D/g, ""));
		}
	};

	return (
		<>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<FontAwesomeIcon className={classes.faIcon} icon={faSearch} />
				</div>
				<InputBase
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					placeholder="Buscar um CPF..."
					value={busca}
					onChange={handleChange}
					onKeyDown={handleKeyPress}
				/>
			</div>
		</>
	);
}

export default InputBusca;
