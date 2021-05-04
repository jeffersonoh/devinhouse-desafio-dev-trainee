import React, { Fragment, useEffect, useState } from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Typography,
    Paper,
    IconButton,
    Tooltip,
    InputBase,
    makeStyles
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { cpfMask } from 'utils/mask';
import moment from 'moment';
import { useAuth } from 'providers/auth';
import { cabecalhoTabela } from 'api/apiTeste';


const useStyles = makeStyles((theme) => ({
    divPesquisa: {
        padding: "8px",
        display:"flex", 
        flexDirection:"row"
    },
    pesquisa: {
        marginLeft: "5px"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    contadorDePagina: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
    }
}));

let pagina = 1;
const ClienteLista = ({ setValue, setClienteSelected, setIndex }) => {
    const { clientes, linhaSelecionada, setLinhaSelecionada } = useAuth();
    const classes = useStyles();
    const [itemPagina, setItempagina] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    
    const setPaginaLista = () => {
        const offSetLinhaPagina = pagina === 1 ? 1 : (pagina - 1) * 5 + 1
        const limiteLinhaPagina = pagina * 5;
        let paginaProvisoria = [];
        let linhaAtual = 1;

        clientes.map((linha) => {
            if (linhaAtual <= limiteLinhaPagina){
                if (linhaAtual >= offSetLinhaPagina){
                    paginaProvisoria.push(linha);
                }
            }
            linhaAtual++;
        })
        
        setItempagina(paginaProvisoria);
    }
    
    const proximaPagina = () => {
        if (clientes.length > pagina * 5) {
            pagina++;
        setPaginaLista();
      }
    }

    const paginaAnterior = () => {
        if (pagina > 1) {
        pagina--;
        setPaginaLista();
      }
    }

    const clickEditar = () => {
        setClienteSelected([]);
        clientes.map((item) => {
            if (linhaSelecionada.id === item.id) {
                setClienteSelected(item);
                setValue(3)
            }
        })
    }

    const clickExcluir = () => {
        setClienteSelected([]);
        clientes.map((item) => {
            if (linhaSelecionada.id === item.id) {
                setClienteSelected(item);
                setValue(4)
            }
        })
    }
    
    useEffect(() => {
      setPaginaLista()
    },[])
    console.log("linhaSelecionada",linhaSelecionada);
    return (
        <Fragment>
            <Paper>
                <div className={classes.divPesquisa}>
                    <SearchIcon />
                    <InputBase 
                      placeholder="Pesquisar" 
                      className={classes.pesquisa}
                      title={"Apenas por CPF"}
                      value={pesquisa}
                      onChange={(e) => {setPesquisa(cpfMask(e.target.value))}}
                    />
                </div>
                <Toolbar className={classes.toolbar} style={{backgroundColor: linhaSelecionada.id !== 0 ? "#ff8a80" : "#fff"}}>
                    <div>
                        {linhaSelecionada.id !== 0 
                            ? <Typography>Selecionado</Typography>
                            : <Typography>Lista de clientes</Typography>
                        }
                    </div>
                    <div>
                        {linhaSelecionada.id !== 0
                            ? //--------------------------------------
                                <div style={{display:"flex", flexDirection:"row"}}>
                                    <Tooltip title="Editar">
                                        <IconButton aria-label="Editar" onClick={clickEditar}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Excluir">
                                        <IconButton aria-label="Excluir" onClick={clickExcluir}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            : //--------------------------------------
                                <Tooltip title="Cadastrar">
                                    <IconButton aria-label="Cadastrar" onClick={() => {setValue(2)}}>
                                        <AddCircleOutlineIcon />
                                    </IconButton>
                                </Tooltip>
                        }
                    </div>
                </Toolbar>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    cabecalhoTabela.map((linha) => {
                                        return (
                                            <TableCell key={linha.id} align="center">
                                                <TableContainer><b>{linha.coluna}</b></TableContainer>
                                            </TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                itemPagina.map((linha) => (
                                    <TableRow 
                                        key={linha.id}
                                        onClick={() => linha.id === linhaSelecionada.id 
                                            ? setLinhaSelecionada({...linhaSelecionada, id:0}) 
                                            : setLinhaSelecionada(linha)}
                                        style={{
                                            backgroundColor: linhaSelecionada.id === linha.id ? "#ff8a80" : "#fff"
                                        }}
                                    >
                                        <TableCell align="center" component="th" scope="row">{linha.nome}</TableCell>
                                        <TableCell align="center">{linha.cpf}</TableCell>
                                        <TableCell align="center">{moment(linha.ddn).format("DD/MM/yyyy")}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Toolbar className={classes.contadorDePagina}>
                    <Tooltip title="Página anterior">
                        <IconButton aria-label="Página anterior" onClick={() => {paginaAnterior()}}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Tooltip>
                    <Typography>
                        {(pagina === 1 
                            ? 1 
                            : (pagina - 1) * 5 + 1) 
                        + "-" + 
                        (pagina * 5 > clientes.length && pagina > 1 
                            ? clientes.length 
                            : clientes.length < 5 
                                ? clientes.length 
                                : pagina * 5) 
                            + " de " + (clientes.length)}
                    </Typography>
                    <Tooltip title="Proxíma página">
                        <IconButton aria-label="Proxíma página" onClick={() => {proximaPagina()}}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </Paper>
        </Fragment>
    )
}

export default ClienteLista;