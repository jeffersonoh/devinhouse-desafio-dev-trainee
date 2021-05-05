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

const ClienteDialog = (props) => {
  const { onClose, selectedValue, open, onSave, cliente, setCliente } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleSave = () => {
    onSave(cliente);
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="lg"
    >
      <DialogTitle id="simple-dialog-title" onClose={handleClose}>Cadastro de Cliente</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              variant="outlined"
              color="secondary"
              margin="normal"
              value={cliente?.nome}
              onChange={e => setCliente({
                ...cliente,
                nome: e.target.value
              })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="CPF"
              variant="outlined"
              color="secondary"
              margin="normal"
              value={cliente?.cpf}
              onChange={e => setCliente({
                ...cliente,
                cpf: e.target.value
              })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Data de nascimento"
              color="secondary"
              variant="outlined"
              type="date"
              margin="normal"
              value={cliente?.dataNascimento?.split('/').reverse().join('-')}
              onChange={e => setCliente({
                ...cliente,
                dataNascimento: e.target.value.split('-').reverse().join('/')
              })}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          cancelar
        </Button>
        <Button
          onClick={handleSave}
          color="secondary"
          autoFocus
          variant="contained"
          disableElevation
        >
          salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ClienteDialog;
