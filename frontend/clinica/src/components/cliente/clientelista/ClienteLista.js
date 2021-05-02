import React, { useEffect, useState } from 'react';
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

export default ClienteLista;