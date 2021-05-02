import { useEffect, useState } from "react";
import { IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, withStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 700,
  }
}));

function formataCPF(cpf){
  //retira os caracteres indesejados...
  cpf = cpf.replace(/[^\d]/g, "");

  //realiza a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

const Tabela = ({ dados, titulo }) => {
  const classes = useStyles();
  const [colunas, setColunas] = useState([]);

  useEffect(() => {
    if (dados.length !== 0) {
      const getColunas = Object.keys(dados[0]);

      getColunas.splice(0, 1);
      
      setColunas(getColunas);
    }
  }, [dados]);

  if (dados.length === 0) {
    return (
      <Typography align="center">
        {`Nenhum ${titulo} cadastrado.`}
      </Typography>
    );
  }
  return (
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {colunas?.map((coluna, index) => (
                <StyledTableCell key={`${coluna}-${index}`}>
                  {coluna === "dataNascimento" ? "DATA DE NASCIMENTO" : coluna.toUpperCase()}
                </StyledTableCell>
              ))}
              <StyledTableCell align="left">GERENCIAR</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dados?.map((linha) => (
              <StyledTableRow key={linha.nome}>
                <StyledTableCell component="th" scope="row">
                  {linha.nome}
                </StyledTableCell>
                <StyledTableCell align="left">{formataCPF(linha.cpf)}</StyledTableCell>
                <StyledTableCell align="left">{linha.dataNascimento}</StyledTableCell>
                <StyledTableCell>
                  <IconButton
                    size="small"
                    className={classes.button}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" className={classes.button}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default Tabela;
