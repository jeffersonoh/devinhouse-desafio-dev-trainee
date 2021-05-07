import { useState, forwardRef } from "react";

import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Hidden,
} from "@material-ui/core";

import { DateTimePicker } from "@material-ui/pickers";

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
      .then(onClose);
  };
  
  const submitClienteUpdate = (event) => {
    event.preventDefault();
    updateCliente({
      ...formData,
      dataDeNascimento: formatISO(dataDeNascimento),
    }).then(onSuccessfulAction)
      .then(onClose);
  };
  
  return (
    <SPaper>
      
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
