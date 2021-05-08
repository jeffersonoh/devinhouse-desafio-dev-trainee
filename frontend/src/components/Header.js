import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useExames } from "../context/ExamesContext";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, MenuItem, Popover, Toolbar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCheck, faAngleDown, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import InputBusca from "./InputBusca";

const useStyles = makeStyles((theme) => ({
	toolbar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		maxWidth: 1024,
		width: "100%",
		margin: "auto",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			padding: theme.spacing(1, 0, 1),
		},
	},
	toolbaritem: {},
	menuitem: {
		"&:hover": {
			color: theme.palette.primary.main,
			"& $faIcon": {
				color: theme.palette.primary.main,
			},
		},
		"& $faIcon": {
			color: theme.palette.text.secondary,
			marginRight: theme.spacing(1),
			width: 10,
		},
	},
	button: {
		color: "white",
	},
	faIcon: {},
}));

function Header() {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();

	const { exames } = useExames();

	const [anchorEl, setAnchorEl] = useState(null);

	const handlePaginaInicial = () => {
		location.pathname === "/" //
			? history.go(0)
			: history.push("/");
	};

	const handleNovoCliente = () => {
		history.push("/clientes/novo");
		// history.go(0);
	};

	const handleOpenMenuExames = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenuExames = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="static">
			<Toolbar className={classes.toolbar}>
				{/* <div className={classes.toolbaritem}> */}
				<Button
					className={classes.button}
					startIcon={<FontAwesomeIcon className={classes.faIcon} icon={faHome} />}
					onClick={handlePaginaInicial}
				>
					Página Inicial
				</Button>

				<InputBusca />
				{/* </div> */}

				{/* <div className={classes.toolbaritem}> */}
				<Button
					className={classes.button}
					endIcon={<FontAwesomeIcon className={classes.faIcon} icon={faUserPlus} />}
					onClick={handleNovoCliente}
				>
					Novo Cliente
				</Button>

				<Button
					className={classes.button}
					endIcon={<FontAwesomeIcon className={classes.faIcon} icon={faAngleDown} />}
					onClick={handleOpenMenuExames}
					disabled={!exames || exames?.length === 0}
				>
					Exames Disponíveis
				</Button>
				{/* </div> */}

				<Popover
					open={Boolean(anchorEl)}
					anchorEl={anchorEl}
					onClose={handleCloseMenuExames}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
				>
					{exames?.length > 0 &&
						exames.map((exame) => (
							<MenuItem
								key={exame.id}
								className={classes.menuitem}
								onClick={handleCloseMenuExames}
							>
								<FontAwesomeIcon className={classes.faIcon} icon={faCheck} /> {exame.nome}
							</MenuItem>
						))}
				</Popover>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
