import { Button, Dialog, DialogActions, DialogContent, Grid, IconButton, Typography, withStyles } from "@material-ui/core";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from 'yup';

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
});

const ExameDialog = (props) => {
  const { onClose, selectedValue, open, onSave, exame } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleInitialValues = () => {
    if (exame) {
      return {
        id: exame.id,
        nome: exame.nome,
      };
    } else {
      return {
        id: 0,
        nome: '',
      }
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="simple-dialog-title" onClose={handleClose}>Cadastro de Exames</DialogTitle>
      <Formik
        initialValues={handleInitialValues()}
        validationSchema={yupSchema}
        onSubmit={onSave}
      >
        <Form>
          <DialogContent>
            <Grid container>
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

export default ExameDialog;
