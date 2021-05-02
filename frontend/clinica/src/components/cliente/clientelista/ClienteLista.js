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
    nome: "Lucas",
    cpf: "123.456.789-10",
    ddn: "1984-02-24"
  },
  {
    id: 2,
    nome: "Lucas",
    cpf: "123.456.789-11",
    ddn: "1988-06-18"
  },
  {
    id: 3,
    nome: "Lucas",
    cpf: "123.456.789-12",
    ddn: "1991-07-11"
  },
  {
    id: 4,
    nome: "Lucas",
    cpf: "123.456.789-13",
    ddn: "1975-12-30"
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
const ClienteLista = ({ setValue, setClienteSelected }) => {
    const classes = useStyles();
    const cabecalhoTabela = [
        {id: "name", coluna: "Clientes"}, 
        {id: "cpf", coluna: "CPF"}, 
        {id: "ddn", coluna: "Data de nascimento"}
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
            var splitStringData = item.ddn.split("-");
            dadosProvisorios.push({
                id: item.id,
                ddn: splitStringData[2]+"/"+splitStringData[1]+"/"+splitStringData[0],
                nome: item.nome,
                cpf: item.cpf
            })
        })
        setDados(dadosProvisorios);
    }

    const clickEditar = () => {
        setClienteSelected([]);
        lista.map((item) => {
            if (linhaSelecionada === item.id) {
                setClienteSelected(item);
                setValue(3)
            }
        })
    }

    const clickExcluir = () => {
        setClienteSelected([]);
        lista.map((item) => {
            if (linhaSelecionada === item.id) {
                setClienteSelected(item);
                setValue(4)
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
                                        <TableCell align="center" component="th" scope="row">{linha.nome}</TableCell>
                                        <TableCell align="center">{linha.cpf}</TableCell>
                                        <TableCell align="center">{linha.ddn}</TableCell>
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
                        (pagina * 5 > lista.length && pagina > 1 
                            ? lista.length 
                            : lista.length < 5 
                                ? lista.length 
                                : pagina * 5) 
                            + " de " + (lista.length)}
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

/* import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { fade, lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const dataBase = [
  {
    id: 1,
    nome: "Lucas",
    cpf: "123.456.789-10",
    ddn: "1984-02-24"
  },
  {
    id: 2,
    nome: "Lucas",
    cpf: "123.456.789-11",
    ddn: "1988-06-18"
  },
  {
    id: 3,
    nome: "Lucas",
    cpf: "123.456.789-12",
    ddn: "1991-07-11"
  },
  {
    id: 4,
    nome: "Lucas",
    cpf: "123.456.789-13",
    ddn: "1975-12-30"
  }
]


const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

function stableSort(array) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  return stabilizedThis.map((el) => el[0]);
}

const ClienteLista = ({ setValue, setClienteSelected }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(dataBase);
  },[])

  const handleClick = (event, cpf) => {
    const selectedIndex = selected.indexOf(cpf);
    if (selectedIndex === -1) {
      setSelected(cpf);
      rows.map((item) => {
        if (item.cpf === cpf) {
          setClienteSelected(item)
        }
      })
    }
    else if (selectedIndex === 0) {
      setSelected([]);
      setClienteSelected([])
    }
  };

  const handleChangePage = ( newPage) => {
    setPage(newPage);
  };

  const isSelected = (cpf) => selected.indexOf(cpf) !== -1;
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
            <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Procurar por CPF"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
        <EnhancedTableToolbar numSelected={selected.length} setValue={setValue} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
            
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows)
                .slice(page * 5, page * 5 + 5)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.cpf);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.cpf)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.cpf}
                      selected={isItemSelected}
                      
                    >
                      <TableCell padding="checkbox" style={{textAlign: "center"}}>
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none" style={{textAlign: "center"}}>
                        {row.nome}
                      </TableCell>
                      <TableCell align="right" style={{textAlign: "center"}}>{row.cpf}</TableCell>
                      <TableCell align="right" style={{textAlign: "center"}}>{row.ddn}</TableCell>
                    </TableRow>
                  );
                })}
              
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={5}
          component="div"
          count={rows.length}
          rowsPerPage={5}
          page={page}
          onChangePage={handleChangePage}
        />
      </Paper>
      
    </div>
  );
}

const headCells = [
  { id: 'name', label: 'Clientes' },
  { id: 'cpf', label: 'CPF' },
  { id: 'ddn', label: 'Data de nascimento' },
];
function EnhancedTableHead() {
  return (
    <TableHead >
      <TableRow>
      <TableCell />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            style={{textAlign: "center"}}>
            <TableContainer>
              {headCell.label}
            </TableContainer>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, setValue } = props;
  

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
           Selecionado
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Lista de clientes
        </Typography>
      )}

      {numSelected > 0 ? (
        <div style={{display:"flex", flexDirection:"row"}}>
          <Tooltip title="Editar">
          <IconButton aria-label="Editar" onClick={() => {setValue(3)}}>
            <EditIcon />
          </IconButton>
        </Tooltip>
          <Tooltip title="Excluir">
          <IconButton aria-label="Excluir" onClick={() => {setValue(4)}}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        </div>
      ) : (
        <Tooltip title="Cadastrar">
          <IconButton aria-label="Cadastrar" onClick={() => {setValue(2)}}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default ClienteLista; */