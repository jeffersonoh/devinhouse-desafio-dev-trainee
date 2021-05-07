import { useState, forwardRef } from "react";

import {
  Grid,
  Typography,
  Button,
  Box,
  Hidden,
} from "@material-ui/core";

import { SPaper, STopRightCloseButton } from "./styledComponents";

import { DateTimePicker } from "@material-ui/pickers";

import { parseISO, formatISO } from "date-fns";

import { decorate } from "utils/cpf";

import { patchAgendamento } from "utils/api";


// forwarding ref because mui modals expect its children to
// (and this form is intended to be shown as a modal)
const AgendamentoUpdateForm = forwardRef((props, ref) => {
  
  const { data, onClose } = props;
  
  const [date, setDate] = useState(parseISO(data.timestamp));
  
  const handleSubmit = (event) => {
    event.preventDefault();
    patchAgendamento({
      ...data,
      timestamp: formatISO(date),
    }).then(onClose);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <SPaper>
	
	<STopRightCloseButton onClick={onClose}/>
	
	<Grid container
	      spacing={2}>
	  
	  {/* header */}
	  <Grid item xs={12}>
	    <Typography variant="h6">Cadastro de agendamento</Typography>
	  </Grid>
	  
	  {/* fields */}
	  <Grid item xs={6}>
	    <Typography variant="caption">Cliente</Typography>
	    <Typography>{data.cliente.nome
			 + " " + data.cliente.sobrenome}</Typography>
	  </Grid>
	  
	  <Grid item xs={6}>
	    <Typography variant="caption">CPF</Typography>
	    <Typography>{decorate(data.cliente.cpf)}</Typography>
	  </Grid>
	  
	  <Grid item xs={6}>
	    <Typography variant="caption">Exame</Typography>
	    <Typography>{data.exame.nome}</Typography>
	  </Grid>
	  
	  <Grid item xs={6}>
	    <Box display="flex"
		 justifyContent="center"
		 flexDirection="column">
	      <Typography variant="caption">Data e hora</Typography>
	      <DateTimePicker autoFocus value={date} onChange={setDate}/>
	    </Box>
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
      </SPaper>
    </form>
  );
});

export default AgendamentoUpdateForm;
