import { useState } from "react";

import {
  Grid,
  IconButton,
  Box,
  Typography,
  Modal,
} from "@material-ui/core";

import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

import {
  SPaper,
  STopRightCloseButton,
  STopLeftBox,
} from "./styledComponents";

import ClienteForm from "components/pageContent/Clientes/ClienteForm";
import AgendamentosList from "./AgendamentosList";

import { decorate } from "utils/cpf";

import { format, parseISO } from "date-fns";

const toDecoratedAgendamentos = ({agendamentos, ...clienteData}) => {
  return agendamentos.map(agendamento => ({
    ...agendamento,
    cliente: clienteData,
  }));
};


const DetailedClienteCard = (props) => {
  
  const { data, shortened, onClose, onDelete, onSuccessfulAction } = props;
  
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  
  const openUpdateModal = () => {
    setUpdateModalIsOpen(true);
  };
  
  const closeUpdateModal = () => {
    setUpdateModalIsOpen(false);
  };
  
  
  return (
    <SPaper>
      
      <Modal open={updateModalIsOpen} onClose={closeUpdateModal}>
	<ClienteForm data={data} onClose={closeUpdateModal}
		     onSuccessfulAction={onSuccessfulAction}/>
      </Modal>
      
      
      {/* controls */}
      <STopRightCloseButton onClick={onClose}/>
      
      <STopLeftBox display="flex" flexDirection="column">
	
	<IconButton onClick={openUpdateModal}>
	  <EditIcon/>
	</IconButton>
	
	<IconButton onClick={() => onDelete(data.id)}>
	  <DeleteIcon/>
	</IconButton>
	
      </STopLeftBox>
      
      
      {/* fields */}
      <Grid container spacing={2}>
	
	<Grid item xs={6}>
	  <Box display="flex" flexDirection="column">
	    <Typography variant="caption">Nome</Typography>
	    <Typography>{data.nome}</Typography>
	  </Box>
	</Grid>
	
	<Grid item xs={6}>
	  <Box display="flex" flexDirection="column">
	    <Typography variant="caption">Sobrenome</Typography>
	    <Typography>{data.sobrenome}</Typography>
	  </Box>
	  
	</Grid>
	
	<Grid item xs={6}>
	  <Box display="flex" flexDirection="column">
	    <Typography variant="caption">Data de nascimento</Typography>
	    <Typography>{
	      format(parseISO(data.dataDeNascimento), "dd/MM/yyyy")
	    }</Typography>
	  </Box>
	</Grid>
	
	<Grid item xs={6}>
	  <Box display="flex" flexDirection="column">
	    <Typography variant="caption">CPF</Typography>
	    <Typography>{decorate(data.cpf)}</Typography>
	  </Box>
	</Grid>
	
	<Grid item xs={12}>
	  <Typography variant="caption">Agendamentos</Typography>
	  <AgendamentosList agendamentos={toDecoratedAgendamentos(data)}
			    shortened={shortened}
			    onSuccessfulAction={onSuccessfulAction}/>
	</Grid>
	
      </Grid>
      
    </SPaper>
  );
};

export default DetailedClienteCard;
