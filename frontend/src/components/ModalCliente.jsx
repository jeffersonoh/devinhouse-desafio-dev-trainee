import {
  Form,
  FormField,
  DateInput,
  TextInput,
  Card,
  Box,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button
} from 'grommet'
import styled from 'styled-components'
import { useState } from 'react'

const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
`

function ModalCliente (props) {
  const isOpen = props.isOpen
  const onClose = props.onClose
  const onSave = props.onSave

  const [cliente, setCliente] = useState({})

  if (isOpen) {
    return (
      <StyledModal>
        <Card gap='medium' background='light-1'>
          <CardHeader pad={{ horizontal: 'medium', top: 'medium' }}>
            <Text size='large' weight='bold'>
              {' '}
              Cadastro de Cliente{' '}
            </Text>
          </CardHeader>
          <CardBody pad={{ horizontal: 'medium' }}>
            <Form>
              <FormField label='Nome'>
                <TextInput
                  onChange={e => {
                    const copiaDoCliente = { ...cliente }
                    copiaDoCliente.nome = e.target.value
                    setCliente(copiaDoCliente)
                  }}
                  placeholder='Digite aqui'
                  value={cliente.nome}
                />
              </FormField>
              <FormField label='CPF'>
                <TextInput
                  onChange={e => {
                    const copiaDoCliente = { ...cliente }
                    copiaDoCliente.cpf = e.target.value
                    setCliente(copiaDoCliente)
                  }}
                  value={cliente.cpf}
                  placeholder='Digite aqui (somente números)'
                />
              </FormField>
              <FormField label='Data de Nascimento'>
                <DateInput
                  format='dd/mm/yyyy'
                  onChange={e => {
                    const copiaDoCliente = { ...cliente }
                    copiaDoCliente.dataDeNascimento = e.value
                    setCliente(copiaDoCliente)
                  }}
                  value={cliente.dataDeNascimento}
                  placeholder='Clique aqui para selecionar'
                />
              </FormField>
            </Form>
          </CardBody>
          <CardFooter
            pad={{ horizontal: 'large', vertical: 'medium' }}
            background='light-2'
          >
            <Box>
              <Button
                onClick={e => {
                  onClose()
                }}
                secondary
                label='cancelar'
              />
            </Box>
            <Box>
              <Button
                onClick={e => {
                  onSave(cliente)
                }}
                primary
                label='salvar'
              />
            </Box>
          </CardFooter>
        </Card>
      </StyledModal>
    )
  } else {
    return <></>
  }
}

export default ModalCliente
