import {
    useState,
    useEffect,
} from "react";

import {
    Grid,
    Modal,
    IconButton,
} from "@material-ui/core";

import {
    Replay as ReplayIcon,
    Add as AddIcon,
} from "@material-ui/icons";

import SearchBar from "./SearchBar";
import MinimalClienteCard from "./MinimalClienteCard";
import DetailedClienteCard from "./DetailedClienteCard";
import ClienteForm from "./ClienteForm";

import {
    SButton,
} from "./styledComponents";

import {
    getClientes,
    searchClientesByCpf,
    deleteCliente as apiDeleteCliente,
} from "utils/api";


const Clientes = () => {
    
    const [clientes, setClientes] = useState([]);
    const [cpfQuery, setCpfQuery] = useState("");
    const [selectedCliente, setSelectedCliente] = useState(null);
    const [clienteRegistrationModalIsOpen, setClienteRegistrationModalIsOpen] = useState(false);
    
    const getAllClientes = () => {
	getClientes()
	    .then(res => setClientes(res.data));
    }
    
    useEffect(() => {
	getAllClientes();
    }, []);
    
    const handleCpfQueryChange = event => {
	setCpfQuery(event.target.value);
    };
    
    const searchByCpf = () => {
	if (cpfQuery === "") {
	    resetSearch();
	}
	
	searchClientesByCpf(cpfQuery)
	    .then(res => setClientes(res.data));
    };
    
    const resetSearch = () => {
	setCpfQuery("");
	getAllClientes();
    };
    
    const deselectCliente = () => {
	setSelectedCliente(null);
    };
    
    const handleSelectedClienteToggle = (data) => {
	
	if (data === selectedCliente) {
	    deselectCliente();
	    return;
	}
	
	setSelectedCliente(data);
    };
    
    const deleteCliente = (id) => {
	apiDeleteCliente(id)
	    .then(deselectCliente)
	    .then(searchByCpf);
    };
    
    const openClienteRegistrationModal = () => {
	setClienteRegistrationModalIsOpen(true);
    };
    
    const closeClienteRegistrationModal = () => {
	setClienteRegistrationModalIsOpen(false);
    };

    const onFormSuccess = () => {
	closeClienteRegistrationModal();
	searchByCpf();
	setSelectedCliente(clientes.filter(c => c.id === selectedCliente.id)[0]);
    };
    
    return (
	<>
	    <Modal open={clienteRegistrationModalIsOpen}
		   onClose={closeClienteRegistrationModal}>
		<ClienteForm onClose={closeClienteRegistrationModal}
			     onSuccess={onFormSuccess}/>
	    </Modal>

	    <Grid container
		  direction="row"
		  spacing={2}>
		
		{/* controls row */}
		<Grid item
		      container
		      alignItems="center"
		      xs={12}>
		    
		    {/* buttons */}
		    <Grid item xs={1}>
			<IconButton aria-label="cadastrar cliente"
				    onClick={openClienteRegistrationModal}>
			    <AddIcon/>
			</IconButton>
			
			<IconButton aria-label="desfazer pesquisa"
				    onClick={resetSearch}>
			    <ReplayIcon/>
			</IconButton>
		    </Grid>
		    
		    {/* search bar */}
		    <Grid item xs="auto">
			<SearchBar label="Pesquisa por CPF"
				   value={cpfQuery}
				   onChange={handleCpfQueryChange}
				   onSubmit={searchByCpf}/>
		    </Grid>
		    
		</Grid>
		
		{/* clientes */}
		<Grid item
	      	      container
	      	      spacing={2}
	      	      xs={selectedCliente ? 6 : 12}>
		    { clientes.map(data => (
			<Grid item xs={6}
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
		  ? <Grid item xs={selectedCliente ? 6 : false}>
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
