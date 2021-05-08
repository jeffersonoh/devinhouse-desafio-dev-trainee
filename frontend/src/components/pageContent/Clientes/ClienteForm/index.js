import { useState, forwardRef } from "react";

import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Hidden,
  Snackbar,
} from "@material-ui/core";

import { DateTimePicker } from "@material-ui/pickers";

import { Alert } from "@material-ui/lab";

import { SPaper, STopRightCloseButton } from "./styledComponents";

import { formatISO, parseISO } from "date-fns";

import { createCliente, updateCliente } from "utils/api";


// forwarding ref because mui modals expect its children to
// (and this form is intended to be shown as a modal)
const ClienteForm = forwardRef((props, ref) => {
  
  const { data, onClose, onSuccessfulAction } = props;
  
  const [formData, setFormData] = useState(data
					   ? data
					   : {
					     nome: "",
					     sobrenome: "",
					     cpf: "",
					     dataDeNascimento: "2021-05-07",
					   });
  // DateTimePicker requires special treatment
  const [dataDeNascimento, setDataDeNascimento] = useState(parseISO(formData.dataDeNascimento));
  const [errorSnackbarIsOpen, setErrorSnackbarIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("you shouldn't be seeing this...");
  

  const handleChange = (event) => {
    setFormData(formData => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  
  const submitNewCliente = (event) => {
    event.preventDefault();
    createCliente({
      ...formData,
      dataDeNascimento: formatISO(dataDeNascimento),
    }).then(onSuccessfulAction)
      .then(onClose)
      .catch(error => {
	createErrorMessage(error.response);
	openErrorSnackbar();
      });
  };
  
  const submitClienteUpdate = (event) => {
    event.preventDefault();
    updateCliente({
      ...formData,
      dataDeNascimento: formatISO(dataDeNascimento),
    }).then(onSuccessfulAction)
      .then(onClose)
      .catch(error => {
	createErrorMessage(error.response);
	openErrorSnackbar();
      });
  };

  const openErrorSnackbar = () => {
    setErrorSnackbarIsOpen(true);
  };

  const closeErrorSnackbar = () => {
    setErrorSnackbarIsOpen(false);
  };

  const createErrorMessage = (response) => {
    if ("Este cpf já está cadastrado no sistema!".localeCompare(response?.data) === 0) {
      setErrorMessage("Este cpf já está cadastrado no sistema!");
      return;
    }

    setErrorMessage("Erro imprevisto; código " + response?.data?.status);
  };

  
  return (
    <SPaper>

      <Snackbar open={errorSnackbarIsOpen} onClose={closeErrorSnackbar}
		autoHideDuration={5000}
		anchorOrigin={{ horizontal:"left", vertical: "bottom" }}>
	<Alert severity="error" variant="filled">{errorMessage}</Alert>
      </Snackbar>
      
      <STopRightCloseButton onClick={onClose}/>
      
      <form onSubmit={Boolean(data) ? submitClienteUpdate : submitNewCliente}>
	<Grid container spacing={4}>
	  
	  {/* title */}
	  <Grid item xs={12}>
	    <Typography variant="h5">Cadastro de cliente</Typography>
	  </Grid>
	  
	  {/* fields */}
	  <Grid item xs={6}>
	    <TextField autoFocus
		       label="Nome"
		       name="nome"
		       value={formData.nome}
		       onChange={handleChange}/>
	  </Grid>
	  
	  <Grid item xs={6}>
	    <TextField label="Sobrenome"
		       name="sobrenome"
		       value={formData.sobrenome}
		       onChange={handleChange}/>
	  </Grid>
	  
	  <Grid item xs={6}>
	    <TextField required={true}
		       helperText="Cadastro obrigatório"
		       label="Cpf"
		       name="cpf"
		       value={formData.cpf}
		       onChange={handleChange}
		       type="number"/>
	  </Grid>
	  
	  <Grid item xs={6}>
	    <DateTimePicker label="Data de nascimento"
			    name="dataDeNascimento"
			    value={dataDeNascimento}
			    onChange={setDataDeNascimento}/>
	  </Grid>
	  
	  
	  {/* controls row */}
	  <Grid item xs={12}>
	    
	    <Box display="flex"
		 justifyContent="flex-end">
	      
	      {/* disables submit on Enter.
		  corroborated by §4.10.21.2 Implicit submission
		  of the HTML5 spec.
		  really nicer than catching kbd events!*/}
	      <Hidden>
		<Button type="submit" disabled/>
	      </Hidden>
	      
	      <Button variant="contained"
		      type="submit">
		Enviar
	      </Button>
	      
	    </Box>
	  </Grid>
	  
	</Grid>
      </form>
      
    </SPaper>
  );
});

export default ClienteForm;
