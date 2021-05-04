import { Button, Dialog, DialogActions, DialogContent, Grid, IconButton, TextField, Typography, withStyles } from "@material-ui/core";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const ExameDialog = (props) => {
  const { onClose, selectedValue, open, onSave, exame, setExane } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleSave = () => {
    onSave(exame);
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="simple-dialog-title" onClose={handleClose}>Cadastro de Exames</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              variant="outlined"
              color="secondary"
              margin="normal"
              value={exame?.nome}
              onChange={e => setExane({
                ...exame,
                nome: e.target.value
              })}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          cancelar
        </Button>
        <Button onClick={handleSave} color="secondary" autoFocus variant="contained">
          salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ExameDialog;
