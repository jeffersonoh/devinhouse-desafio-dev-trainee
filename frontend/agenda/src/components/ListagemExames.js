import React, { useEffect, useState } from "react";

import AgendaService from "../services/AgendaService";
import PageWrapper from "./PageWrapper";

import {
  Paper,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DataTable() {
  const classes = useStyles();
  const [exameList, setExameList] = useState([]);

  useEffect(() => {
    getExames();
  }, []);

  const getExames = async () => {
    const exames = await AgendaService.buscarExames();
    setExameList(exames);
  };

  return (
    <PageWrapper>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">ID/EXAME</TableCell>
              <TableCell align="center">EXAME</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exameList.map((exame) => (
              <TableRow key={exame.id}>
                <TableCell component="th" scope="row" align="center">
                  {exame.id}
                </TableCell>
                <TableCell align="center">{exame.typeOfExam}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageWrapper>
  );
}
