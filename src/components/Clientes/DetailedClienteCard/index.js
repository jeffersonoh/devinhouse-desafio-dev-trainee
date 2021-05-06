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

import ClienteForm from "components/Clientes/ClienteForm";
import AgendamentosList from "components/Clientes/AgendamentosList";

import {
    SPaper,
    STopRightCloseButton,
    STopLeftBox,
} from "./styledComponents";

import { decorate } from "utils/cpf";

import { format, parseISO } from "date-fns";


const DetailedClienteCard = (props) => {
    
    const { data, onClose, onDelete } = props;
    
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
    
    const openUpdateModal = () => {
	setUpdateModalIsOpen(true);
    };
    
    const closeUpdateModal = () => {
	setUpdateModalIsOpen(false);
    };

    
    return (
	<SPaper>
	    
	    <Modal open={updateModalIsOpen}
		   onClose={closeUpdateModal}>
		<ClienteForm data={data}
			     onClose={closeUpdateModal}/>
	    </Modal>

	    
	    {/* controls */}
	    <STopRightCloseButton onClick={onClose}/>
	    
	    <STopLeftBox display="flex"
			 flexDirection="column">

		<IconButton onClick={openUpdateModal}>
		    <EditIcon/>
		</IconButton>

		<IconButton onClick={() => onDelete(data.id)}>
		    <DeleteIcon/>
		</IconButton>

	    </STopLeftBox>
	    

	    {/* fields */}
	    <Grid container
		  spacing={2}>
		
		<Grid item xs={6}>
		    <Box display="flex"
			 flexDirection="column">
			<Typography variant="caption">Nome</Typography>
			<Typography>{data.nome}</Typography>
		    </Box>
		</Grid>
		
		<Grid item xs={6}>
		    <Box display="flex"
			 flexDirection="column">
			<Typography variant="caption">Sobrenome</Typography>
			<Typography>{data.sobrenome}</Typography>
		    </Box>
		    
		</Grid>
		
		<Grid item xs={6}>
		    <Box display="flex"
			 flexDirection="column">
			<Typography variant="caption">Data de nascimento</Typography>
			<Typography>
			    {
				format(parseISO(data.dataDeNascimento), "dd/MM/yyyy")
			    }
			</Typography>
		    </Box>
		</Grid>
		
		<Grid item xs={6}>
		    <Box display="flex"
			 flexDirection="column">
			<Typography variant="caption">CPF</Typography>
			<Typography>{decorate(data.cpf)}</Typography>
		    </Box>
		</Grid>

		<Grid item xs={12}>
		    <Typography variant="caption">Agendamentos</Typography>
		    <AgendamentosList clienteData={data}/>
		</Grid>
		
	    </Grid>

	</SPaper>
    );
};

export default DetailedClienteCard;
