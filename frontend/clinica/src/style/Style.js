import { makeStyles } from "@material-ui/core";
import { indigo, lightBlue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    body: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 30,
        padding: 8,
        backgroundColor: indigo[50],
        height: "100vh",
        
    },
    childrenBody: {
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        maxWidth: "1100px"
    },
    menu: {
        width: "100%",
        maxWidth: "1100px"
    },
    divPesquisa: {
        padding: "8px",
        display:"flex", 
        flexDirection:"row"
    },
    pesquisa: {
        marginLeft: "5px"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    contadorDePagina: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
    },
    control: {
        padding: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: "100%",
        maxWidth: "400px"
    },
    form: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    button: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        width: "150px"
    },
    tabs: {
        color: theme.palette.primary.main[700],
    }
}));

