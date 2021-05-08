import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Exams() {
  const [exams, setExams] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/backend/v1/exames').then(result => setExams(result.data))
  }, [])

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Exames Disponíveis</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exams?.map((client, index) =>
              <TableRow key={index}>
                <TableCell key={`nome-${index}`}>{client.name}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  )
}
