import React, { Fragment, useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Toolbar, Typography, Paper, IconButton, Tooltip,
    InputBase
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import { cpfMask } from 'utils/mask';
import moment from 'moment';
import { useAuth } from 'providers/auth';
import { cabecalhoTabelaClientes, listaClienteInicial } from 'api/apiTeste';
import { useStyles } from 'style/Style';
import axios from 'axios';

let pagina = 1;
const ClienteLista = () => {
    const { linhaSelecionadaCliente, setLinhaSelecionadaCliente,
        setIndex, setResposta, refresh, setRefresh, setClientesG } = useAuth();
    const classes = useStyles();

    const [clientes, setClientes] = useState([listaClienteInicial]);
    const [pesquisa, setPesquisa] = useState("");
    const [itemPagina, setItempagina] = useState([]);


    const setPaginaLista = (lista) => {
        const offSetLinhaPagina = pagina === 1 ? 1 : (pagina - 1) * 5 + 1
        const limiteLinhaPagina = pagina * 5;
        let paginaProvisoria = [];
        let linhaAtual = 1;

        lista.map((linha) => {
            if (linhaAtual <= limiteLinhaPagina) {
                if (linhaAtual >= offSetLinhaPagina) {
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

    const procurarCliente = () => {
        if (pesquisa.length > 0) {
            axios.get(`http://localhost:8080/clinica-devinhouse/v1/clientes/procurar/filtrar?cpf=${pesquisa}`)
                .then(response => {
                    setPaginaLista(response.data);
                    setResposta(207);
                })
        }
    }
    const GETListaCompleta = () => {
        axios.get("http://localhost:8080/clinica-devinhouse/v1/clientes/procurar/todos")
            .then(response => {
                setClientes(response.data);
                setPaginaLista(response.data);
                setClientesG(response.data);
            })
    }

    useEffect(() => {
        GETListaCompleta();
        setRefresh(false);
        setPesquisa("");
        setLinhaSelecionadaCliente({ ...linhaSelecionadaCliente, id: 0 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <Paper>
                <div className={classes.divPesquisa}>
                    <IconButton aria-label="Editar" onClick={() => {
                        if (pesquisa.length > 0) {
                            procurarCliente();
                            setRefresh(true);
                        }
                    }}>
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        placeholder="Pesquisar por CPF"
                        className={classes.pesquisa}
                        title={"Apenas por CPF"}
                        value={pesquisa}
                        onChange={(e) => { setPesquisa(cpfMask(e.target.value)) }}
                    />
                    {refresh &&
                        <IconButton aria-label="Editar" onClick={() => {
                            GETListaCompleta();
                            setPesquisa("");
                            setLinhaSelecionadaCliente({ ...linhaSelecionadaCliente, id: 0 });
                            setRefresh(false);
                        }}>
                            <CloseIcon />
                        </IconButton>
                    }
                </div>
                <Toolbar className={classes.toolbar} style={{ backgroundColor: linhaSelecionadaCliente.id !== 0 ? "#ff8a80" : "#fff" }}>
                    <div>
                        {linhaSelecionadaCliente.id !== 0
                            ? <Typography>Selecionado</Typography>
                            : <Typography>Lista de clientes</Typography>
                        }
                    </div>
                    <div>
                        {linhaSelecionadaCliente.id !== 0
                            ? //--------------------------------------
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <Tooltip title="Editar">
                                    <IconButton aria-label="Editar" onClick={() => setIndex(3)}>
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Excluir">
                                    <IconButton aria-label="Excluir" onClick={() => setIndex(4)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            : //--------------------------------------
                            <Tooltip title="Cadastrar">
                                <IconButton aria-label="Cadastrar" onClick={() => setIndex(2)}>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </Tooltip>
                        }
                    </div>
                </Toolbar>
                <TableContainer>
                    {itemPagina.length === 0 &&
                        <Toolbar>
                            <Typography>
                                Não encontramos nenhum cliente, cadastre o primeiro!
                            </Typography>
                        </Toolbar>
                    }
                    {itemPagina.length > 0 &&
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        cabecalhoTabelaClientes.map((linha) => {
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
                                    itemPagina?.map((linha) => (
                                        <TableRow
                                            key={linha.id}
                                            onClick={() => linha.id === linhaSelecionadaCliente.id
                                                ? setLinhaSelecionadaCliente({ ...linhaSelecionadaCliente, id: 0 })
                                                : setLinhaSelecionadaCliente(linha)}
                                            style={{
                                                backgroundColor: linhaSelecionadaCliente.id === linha.id ? "#ff8a80" : "#fff"
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
                    }
                </TableContainer>
                {itemPagina.length > 0 &&
                    <Toolbar className={classes.contadorDePagina}>
                        <Tooltip title="Página anterior">
                            <IconButton aria-label="Página anterior" onClick={() => { paginaAnterior() }}>
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
                            <IconButton aria-label="Proxíma página" onClick={() => { proximaPagina() }}>
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                }
            </Paper>
        </Fragment>
    )
}

export default ClienteLista;