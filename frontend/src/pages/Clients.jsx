import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import DeleteIcon from '@material-ui/icons/Delete'
import ClientModal from "../components/ClientModal"

export default function Clients() {
  const [clients, setClients] = useState([])
  const [change, setChange] = useState(0)
  const deleteItem = (itemId) => axios.delete(`http://localhost:8080/backend/v1/clientes/${itemId}`)
  const reRender = () => {setChange(change + 1)}

  useEffect(() => {
    axios.get('http://localhost:8080/backend/v1/clientes').then(result => setClients(result.data))
  }, [change])

  return (
    <>
      <TableContainer>
        <Table>
          <caption><ClientModal /></caption>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Sobrenome</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Data de Nascimento</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients?.map((client, index) =>
              <TableRow key={index}>
                <TableCell key={`nome-${index}`}>{client.name}</TableCell>
                <TableCell key={`sobrenome-${index}`}>{client.lastName}</TableCell>
                <TableCell key={`cpf-${index}`}>{client.cpf}</TableCell>
                <TableCell key={`data-${index}`}>{client.birthDate}</TableCell>
                <TableCell width="5%" align="center">
                  <IconButton color="primary" onClick={() => { deleteItem(client.id).then(reRender) }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            )}
            {/* <TableRow>
              <TableCell>

              </TableCell>
            </TableRow>*/}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  )
}
