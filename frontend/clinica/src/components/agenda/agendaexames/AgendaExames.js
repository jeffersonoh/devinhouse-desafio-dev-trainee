import React, { Fragment, useEffect, useState } from 'react';

import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Toolbar, Typography, Paper, IconButton, Tooltip,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useStyles } from 'style/Style';
import { cabecalhoTabelaExames } from 'api/apiTeste';
import { useAuth } from 'providers/auth';


let pagina = 1;
const AgendaExames = () => {
    const classes = useStyles();
    const { examesOfertados } = useAuth();
    const [itemPagina, setItempagina] = useState([]);

    const setPaginaLista = () => {
        const offSetLinhaPagina = pagina === 1 ? 1 : (pagina - 1) * 5 + 1
        const limiteLinhaPagina = pagina * 5;
        let paginaProvisoria = [];
        let linhaAtual = 1;

        examesOfertados.map((linha) => {
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
        if (examesOfertados.length > pagina * 5) {
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

    useEffect(() => {
        setPaginaLista();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    cabecalhoTabelaExames.map((linha) => {
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
                                    <TableRow key={linha.id}>
                                        <TableCell align="center" component="th" scope="row">{linha.id}</TableCell>
                                        <TableCell align="center">{linha.nome}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
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
                            (pagina * 5 > examesOfertados.length && pagina > 1
                                ? examesOfertados.length
                                : examesOfertados.length < 5
                                    ? examesOfertados.length
                                    : pagina * 5)
                            + " de " + (examesOfertados.length)}
                    </Typography>
                    <Tooltip title="Proxíma página">
                        <IconButton aria-label="Proxíma página" onClick={() => { proximaPagina() }}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </Paper>
        </Fragment>
    )
}

export default AgendaExames;