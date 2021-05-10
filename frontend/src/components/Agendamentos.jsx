import React, { useEffect, useState } from 'react'
import {
  Heading,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Box,
  Grid
} from 'grommet'
import { listarAgendamentos, deletarAgendamentos } from '../lib/api'
import * as Icons from 'grommet-icons'

function Agendamentos () {
  const [agendamentos, setAgendamentos] = useState([])

  useEffect(() => {
    const inicializar = async () => {
      const agendamentos = await listarAgendamentos()
      setAgendamentos(agendamentos)
    }

    inicializar()
  }, [])

  return (
    <>
      <Heading size='small' margin='medium'>
        Agendamentos
      </Heading>
      <Grid gap='medium' columns='small' margin='medium'>
        {agendamentos &&
          agendamentos.map(agendamento => (
            <Card key={agendamento.id} gap='medium' background='light-1'>
              <CardHeader pad={{ horizontal: 'small', top: 'medium' }}>
                <Text weight='bold'>{agendamento.exame.nome} </Text>
              </CardHeader>
              <CardBody gap='small' pad={{ horizontal: 'small' }}>
                <Box>Cliente: {agendamento.cliente.nome}</Box>
                <Box>
                  Data: {new Date(agendamento.data).toLocaleDateString('pt-br')}
                </Box>
              </CardBody>
              <CardFooter
                pad={{ horizontal: 'large', vertical: 'small' }}
                background='light-2'
              >
                <Box onClick={() => console.log('oie')} align='center'>
                  <Icons.Edit />
                </Box>
                <Box
                  onClick={() => {
                    setAgendamentos(
                      agendamentos.filter(a => agendamento.id !== a.id)
                    )
                    deletarAgendamentos(agendamento.id)
                  }}
                  align='center'
                >
                  <Icons.Trash />
                </Box>
              </CardFooter>
              {/* <Text weight='bold'>{agendamento.exame.nome} </Text>
            <Box>Cliente: {agendamento.cliente.nome}</Box>
            <Box>
              Data: {new Date(agendamento.data).toLocaleDateString('pt-br')}
            </Box>
            <Grid
              style={{ borderTop: '1px solid black' }}
              columns={{ count: 2, size: 'auto' }}
              an='center'
            >
              <Box align='center'>
                <Icons.Edit />
              </Box>
              <Box align='center'>
                <Icons.Trash />
              </Box>
            </Grid> */}
            </Card>
          ))}
      </Grid>
    </>
  )
}

export default Agendamentos
