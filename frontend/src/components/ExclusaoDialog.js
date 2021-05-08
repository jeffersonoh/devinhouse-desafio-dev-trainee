import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  deleteButton: {
    color: "#FD4B4B",
    borderColor: "#FD4B4B",
    '&:hover': {
      backgroundColor: "rgba(253, 75, 75, .1)",
      borderColor: "#FD4B4B",
    }
  }
}));

const ExclusaoDialog = (props) => {
  const { titulo, descricao, onClose, open, onDelete, entidadeId } = props;

  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{titulo}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {descricao}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          cancelar
        </Button>
        <Button
          onClick={() => onDelete(entidadeId)}
          color="secondary"
          variant="outlined"
          className={classes.deleteButton}
        >
          excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExclusaoDialog;
