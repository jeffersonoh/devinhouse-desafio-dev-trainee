import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useAuth } from 'providers/auth';

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

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DialogoOPEditar() {
  const { index, setIndex,setDialogo } = useAuth();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setDialogo(false)
    if (index < 5) {setIndex(1);}
    setOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Comunicado
        </DialogTitle>
        <DialogContent dividers>
          <img 
            src="https://i.ibb.co/7NvyGw5/editar.gif" 
            style={{
              width: "100%",
              height: "200px"
            }}
          />
          <Typography gutterBottom>
            Opps!! Nos perdoe pelo inconveniente, para acessar o campo de edição, 
            é necessário clicar no cliente ou marcação desejada, vá no campo superior 
            e pressione a opção de edição, simbolizada por um lápis.
          </Typography>
          <Typography gutterBottom>
            Att.
          </Typography>
          <Typography gutterBottom>
            Equipe DEV, nós agradeços a utilização de nosso sistema.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Okk!! Entendido!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
