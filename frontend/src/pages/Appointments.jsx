import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Appointments() {
  const [Appointments, setAppointments] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/backend/v1/agendamentos').then(result => console.log(result.data))
  }, [])

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Exames Disponíveis</TableCell>
              <TableCell>Exames Disponíveis</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Appointments?.map((client, index) =>
              <TableRow key={index}>
                <TableCell key={`nome-${index}`}>{client.dateAndTime}</TableCell>
                <TableCell key={`nome-${index}`}>{client.Exam}</TableCell>
                <TableCell key={`nome-${index}`}>{client.clientId}</TableCell>

              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  )
}
