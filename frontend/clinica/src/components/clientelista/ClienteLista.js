import * as React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    maxWidth: '300px',
    
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
  
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
   }
}));

const columns = [
    { field: 'nome', headerName: 'Nome', width: 200 },
    {
      field: 'ddn',
      headerName: 'Data de nascimento',
      type: 'number',
      width: 200,
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      sortable: false,
      width: 170,
    },
  ];
  
  const rows = [
    { id: 1, nome: 'Snow',       cpf: '123.123.123-79', ddn: "26/01/1984" },
    { id: 2, nome: 'Lannister',  cpf: '123.123.123-79', ddn: "26/01/1984" },
    { id: 3, nome: 'Lannister',  cpf: '123.123.123-79', ddn: "26/01/1984" },
    { id: 4, nome: 'Stark',      cpf: '123.123.123-79', ddn: "26/01/1984" },
    { id: 5, nome: 'Targaryen',  cpf: '123.123.123-79', ddn: "26/01/1984" },
    { id: 6, nome: 'Melisandre', cpf: '123.123.123-79', ddn: "26/01/1984" },
    { id: 7, nome: 'Clifford',   cpf: '123.123.123-79', ddn: "26/01/1984" },
    { id: 8, nome: 'Frances',    cpf: '123.123.123-79', ddn: "26/01/1984" },
    { id: 9, nome: 'Roxie',      cpf: '123.123.123-79', ddn: "26/01/1984" },
  ];

const ClienteLista = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Procurar por CPF"
              classes={{input: classes.inputInput}}/>
          </div>
          <div style={{ height: 400, maxWidth: '600px', textAlign: "center" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
    </div>
  );
}

export default ClienteLista;







