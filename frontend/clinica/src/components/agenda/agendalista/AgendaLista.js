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

const lista = [
  {
    id: 1,
    data: "2021-02-24T12:00",
    exame: "Teste de Ergométrico (Teste de Esforço)",
    pacienteNome: "Lucas",
    cpf: "123.456.789-10"
  },
  {
    id: 2,
    data: "2021-02-24T13:00",
    exame: "Ressonância Magnética (RM)",
    pacienteNome: "Lucas",
    cpf: "123.456.789-10"
  },
  {
    id: 3,
    data: "2021-02-25T12:00",
    exame: "Teste de Ergométrico (Teste de Esforço)",
    pacienteNome: "Lucas",
    cpf: "123.456.789-11"
  },
  {
    id: 4,
    data: "2021-02-26T06:00",
    exame: "Tomografia do coração e vasos",
    pacienteNome: "Lucas",
    cpf: "123.456.789-11"
  },
  {
    id: 5,
    data: "2021-02-22T15:00",
    exame: "Ressonância Magnética (RM)",
    pacienteNome: "Lucas",
    cpf: "123.456.789-11"
  },
  {
    id: 6,
    data: "2021-02-21T19:00",
    exame: "Tomografia do coração e vasos",
    pacienteNome: "Lucas",
    cpf: "123.456.789-12"
  }
]
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
const AgendaLista = ({ setValue, setAgendaSelected }) => {
    const classes = useStyles();
    const cabecalhoTabela = [
        {id: "pacienteNome", coluna: "Clientes"}, 
        {id: "cpf", coluna: "CPF"}, 
        {id: "data", coluna: "Marcação"}, 
        {id: "exame", coluna: "Exame"},   
    ];
    const [linhaSelecionada, setLinhaSelecionada] = useState(0);
    const [itemPagina, setItempagina] = useState([]);
    const [dados, setDados] = useState([]);
    
    const setPaginaLista = () => {
        const offSetLinhaPagina = pagina === 1 ? 1 : (pagina - 1) * 5 + 1
        const limiteLinhaPagina = pagina * 5;
        let paginaProvisoria = [];
        let linhaAtual = 1;

        dados.map((linha) => {
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
        if (lista.length >= pagina * 5) {
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

    const formatarDados = () => {
        let dadosProvisorios = [];

        lista.map((item) => {
            var splitStringTotal = item.data.split("T");
            var splitStringData = splitStringTotal[0].split("-");
            dadosProvisorios.push({
                id: item.id,
                data: splitStringData[2]+"/"+splitStringData[1]+"/"+splitStringData[0]+" - "+ splitStringTotal[1],
                exame: item.exame,
                pacienteNome: item.pacienteNome,
                cpf: item.cpf
            })
        })
        setDados(dadosProvisorios);
    }

    const clickEditar = () => {
        setAgendaSelected([]);
        lista.map((item) => {
            if (linhaSelecionada === item.id) {
                setAgendaSelected(item);
                setValue(3)
            }
        })
    }
    
    useEffect(() => {
        formatarDados()
    },[])

    useEffect(() => {
        setPaginaLista()
    },[dados])

    return (
        <Fragment>
            <Paper>
                <div className={classes.divPesquisa}>
                    <SearchIcon />
                    <InputBase placeholder="Pesquisar" className={classes.pesquisa}/>
                </div>
                <Toolbar className={classes.toolbar} style={{backgroundColor: linhaSelecionada !== 0 ? "#ff8a80" : "#fff"}}>
                    <div>
                        {linhaSelecionada !== 0 
                            ? <Typography>Selecionado</Typography>
                            : <Typography>Agenda</Typography>
                        }
                    </div>
                    <div>
                        {linhaSelecionada !== 0 
                            ? //--------------------------------------
                                <div style={{display:"flex", flexDirection:"row"}}>
                                    <Tooltip title="Editar">
                                        <IconButton aria-label="Editar" onClick={clickEditar}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Excluir">
                                        <IconButton aria-label="Excluir" onClick={() => {setValue(4)}}>
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
                                                <TableContainer>{linha.coluna}</TableContainer>
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
                                        onClick={() => linha.id === linhaSelecionada 
                                            ? setLinhaSelecionada(0) 
                                            : setLinhaSelecionada(linha.id)}
                                        style={{
                                            backgroundColor: linhaSelecionada === linha.id ? "#ff8a80" : "#fff"
                                        }}
                                    >
                                        <TableCell align="center" component="th" scope="row">{linha.pacienteNome}</TableCell>
                                        <TableCell align="center">{linha.cpf}</TableCell>
                                        <TableCell align="center">{linha.data}</TableCell>
                                        <TableCell align="center">{linha.exame}</TableCell>
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
                    {(pagina === 1 ? 1 : (pagina - 1) * 5 + 1) + " de " + (lista.length)}
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

export default AgendaLista;