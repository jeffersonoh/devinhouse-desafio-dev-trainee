import React, { useEffect, useState } from 'react'
import {
  Heading,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Box,
  Grid,
  Button
} from 'grommet'
import { listarClientes, deletarClientes, criarCliente } from '../lib/api'
import * as Icons from 'grommet-icons'
import ModalCliente from './ModalCliente'

function Clientes () {
  const [clientes, setClientes] = useState([])

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const inicializar = async () => {
      const clientes = await listarClientes()
      setClientes(clientes)
    }

    inicializar()
  }, [])

  return (
    <>
      <ModalCliente
        isOpen={isOpen}
        onSave={async novoCliente => {
          await criarCliente(novoCliente)
          setIsOpen(false)
          const clientes = await listarClientes()
          setClientes(clientes)
        }}
        onClose={() => {
          setIsOpen(false)
        }}
      />
      <div>
        <Heading size='small' margin='medium'>
          Cliente
        </Heading>
        <div
          style={{
            textAlign: 'right',
            marginTop: '-60px',
            paddingRight: '25px'
          }}
        >
          <Button
            onClick={e => {
              setIsOpen(true)
            }}
            primary
            label='Novo Cliente'
          />
        </div>
      </div>

      <Grid gap='medium' columns='small' margin='medium'>
        {clientes &&
          clientes.map(cliente => {
            return (
              <Card key={cliente.id} gap='medium' background='light-1'>
                <CardHeader pad={{ horizontal: 'small', top: 'medium' }}>
                  <Text weight='bold'>{cliente.nome} </Text>
                </CardHeader>
                <CardBody gap='small' pad={{ horizontal: 'small' }}>
                  <Box>CPF: {cliente.cpf}</Box>
                  <Box>
                    Data de Nascimento:{' '}
                    {new Date(cliente.dataDeNascimento).toLocaleDateString(
                      'pt-br'
                    )}
                  </Box>
                </CardBody>
                <CardFooter
                  pad={{ horizontal: 'large', vertical: 'small' }}
                  background='light-2'
                >
                  <Box
                    onClick={e => {
                      setIsOpen(true)
                    }}
                    align='center'
                  >
                    <Icons.Edit />
                  </Box>
                  <Box
                    onClick={() => {
                      setClientes(clientes.filter(a => cliente.cpf !== a.cpf))
                      deletarClientes(cliente.cpf)
                      console.log(cliente.cpf)
                    }}
                    align='center'
                  >
                    <Icons.Trash />
                  </Box>
                </CardFooter>
              </Card>
            )
          })}
      </Grid>
    </>
  )
}

export default Clientes
