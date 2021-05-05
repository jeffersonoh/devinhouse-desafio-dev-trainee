import { useEffect, useState } from "react";
import { IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import formataCPF from "../helpers/formataCPF";

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

const Tabela = ({ dados, titulo, endpoint, abreUpdate }) => {
  const classes = useStyles();
  const [colunas, setColunas] = useState([]);

  useEffect(() => {
    if (dados.length !== 0) {
      const getColunas = Object.keys(dados[0]);

      //getColunas.splice(0, 1);
      
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
              <StyledTableCell align="right">GERENCIAR</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dados?.map((linha, index) => (
              <StyledTableRow key={index}>
                {colunas?.map((coluna, index) => (
                  <StyledTableCell key={coluna}>
                    {coluna === "cpf" 
                      ? formataCPF(linha[coluna])
                      : coluna === "cliente" || coluna === "exame" 
                      ? linha[coluna].nome 
                      : linha[coluna]
                    }
                  </StyledTableCell>
                ))}
                <StyledTableCell align="right">
                  {endpoint === "clientes" || endpoint === "exames"
                    ? (
                      <IconButton 
                        size="small"
                        className={classes.button}
                        onClick={() => abreUpdate(linha)}
                      >
                        <EditIcon />
                      </IconButton>
                    )
                    : (
                      <IconButton
                        size="small"
                        className={classes.button}
                        component={Link}
                        to={{
                          pathname: linha.cpf ? `${endpoint}/${linha.cpf}/editar` : `${endpoint}/${linha.id}/editar`,
                          state: { dados: linha },
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    )
                  }   
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
