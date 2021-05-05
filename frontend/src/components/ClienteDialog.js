import { Button, Dialog, DialogActions, DialogContent, Grid, IconButton, makeStyles, Typography, withStyles } from "@material-ui/core";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
  gridContainer: {
    marginBottom: 20,
  }
}));

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

const yupSchema = Yup.object().shape({
  nome: Yup.string().required('Campo nome é obrigatório'),
  cpf: Yup.string().required('Campo cpf é obrigatório'),
  dataNascimento: Yup.string().required('Campo data de nascimento é obrigatório'),
});

const ClienteDialog = (props) => {
  const { onClose, selectedValue, open, onSave, cliente } = props;

  const classes = useStyles();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleInitialValues = () => {
    if (cliente) {
      return {
        id: cliente.id,
        nome: cliente.nome,
        cpf: cliente.cpf,
        dataNascimento: cliente.dataNascimento.split('/').reverse().join('-'),
      };
    } else {
      return {
        id: 0,
        nome: '',
        cpf: '',
        dataNascimento: '',
      }
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="lg"
    >
      <DialogTitle id="simple-dialog-title" onClose={handleClose}>Cadastro de Cliente</DialogTitle>
      <Formik 
        initialValues={handleInitialValues()}
        validationSchema={yupSchema}
        onSubmit={onSave}
      >
        <Form>
          <DialogContent>
            <Grid container spacing={2} className={classes.gridContainer}>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="nome"
                  label="Nome"
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  name="cpf"
                  label="CPF"
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  name="dataNascimento"
                  label="Data de nascimento"
                  color="secondary"
                  variant="outlined"
                  type="date"
                  margin="normal"
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
              type="submit"
              color="secondary"
              variant="contained"
              disableElevation
            >
              salvar
            </Button>
          </DialogActions>
        </Form>
      </Formik>    
    </Dialog>
  );
}

export default ClienteDialog;
