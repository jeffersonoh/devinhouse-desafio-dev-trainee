import { useState, useEffect } from "react";

import {
  Grid,
  Box,
  Modal,
  IconButton,
  Typography,
} from "@material-ui/core";

import {
  Replay as ReplayIcon,
  Add as AddIcon,
} from "@material-ui/icons";

import { SButton } from "./styledComponents";

import SearchBar from "./SearchBar";
import MinimalClienteCard from "./MinimalClienteCard";
import DetailedClienteCard from "./DetailedClienteCard";
import ClienteForm from "./ClienteForm";

import { useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import {
  getClientes,
  searchClientesByCpf,
  deleteCliente as apiDeleteCliente,
} from "utils/api";


const useStyles = makeStyles(theme => ({
  hidden: {
    display: "none",
  },
}));

const Clientes = () => {
  
  const classes = useStyles();
  const theme = useTheme();
  const smDownScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  const [clientes, setClientes] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [cpfQuery, setCpfQuery] = useState("");
  const [clienteFormModalIsOpen, setClienteFormModalIsOpen] = useState(false);
  
  useEffect(() => {
    getClientes().then(res => setClientes(res.data));
  }, []);
  
  const openClienteFormModal = () => {
    setClienteFormModalIsOpen(true);
  };
  
  const closeClienteFormModal = () => {
    setClienteFormModalIsOpen(false);
  };
  
  const handleCpfQueryChange = event => {
    setCpfQuery(event.target.value);
  };
  
  const searchByCpf = () => {
    searchClientesByCpf(cpfQuery)
      .then(res => setClientes(res.data));
  };
  
  const handleSelectedClienteToggle = (data) => {
    
    if (data === selectedCliente) {
      deselectCliente();
      return;
    }
    setSelectedCliente(data);
  };
  
  const deselectCliente = () => {
    setSelectedCliente(null);
  };
  
  const deleteCliente = (id) => {
    apiDeleteCliente(id)
      .then(deselectCliente);
  };
  
  
  return (
    <>
      <Modal open={clienteFormModalIsOpen} onClose={closeClienteFormModal}>
	<ClienteForm onClose={closeClienteFormModal}/>
      </Modal>
      
      <Grid container
	    direction="row"
	    spacing={2}>
	
	{/* toolbar row */}
	<Grid item xs={12}
	      container
	      spacing={2}
	      alignItems="center">
	  
	  
	  { smDownScreen
	    ? <Grid item xs={12}>
		<Typography variant="h3">Clientes</Typography>
	      </Grid>
	    : null
	  }
	  
	  {/* controls */}
	  <Grid item xs={12} md={6}>
	    <Box display="flex">
	      <IconButton aria-label="cadastrar cliente"
	     		  onClick={openClienteFormModal}>
		<AddIcon/>
	      </IconButton>
	      
	      <SearchBar label="Pesquisa por CPF"
	     		 value={cpfQuery}
	     		 onChange={handleCpfQueryChange}
	     		 onSubmit={searchByCpf}/>
	    </Box>
	  </Grid>
	  
	  { smDownScreen
	    ? null
	    : <Grid item xs={12} md={6}>
		<Typography variant="h3">Clientes</Typography>
	      </Grid>
	  }
	  
	</Grid>
	
	{/* clientes */}
	
	<Grid item xs={12}
	      className={ smDownScreen && selectedCliente ? classes.hidden : ""}
	      md={selectedCliente ? 6 : 12}
	      container
	      spacing={2}>
	  { clientes.map(data => (
	    <Grid item xs={12}
		  sm={selectedCliente ? 12 : 6 }
		  lg={selectedCliente ? 6 : 4 }
		  xl={selectedCliente ? 4 : 3 }
		  key={data.id}>
	      <SButton onClick={() => handleSelectedClienteToggle(data)}>
		<MinimalClienteCard data={data}
				    outlined={data?.id === selectedCliente?.id}/>
	      </SButton>
	    </Grid>
	  ))
	  }
	</Grid>
	
	
	{/* detailed cliente card */}
	{ selectedCliente
	  ? <Grid item xs={12}
		  md={selectedCliente ? 6 : false}>

	      <DetailedClienteCard data={selectedCliente}
				   onClose={deselectCliente}
				   onDelete={deleteCliente}/>
	    </Grid>
	  : null
	}
	
      </Grid>
    </>
  );
}

export default Clientes;
