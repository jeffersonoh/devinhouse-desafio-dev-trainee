import React from 'react'
import { Grommet, Nav, Anchor, TextInput } from 'grommet'
import * as Icons from 'grommet-icons'
import styled from 'styled-components'
import { grommet } from 'grommet/themes'
import { Link } from 'react-router-dom'

const StyledTextInput = styled(TextInput)`
  width: 400px;
  float: right;
  border-radius: 20px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`

function Navbar () {
  return (
    <Grommet theme={grommet}>
      <Nav
        className='Navbar'
        direction='row'
        background='brand'
        pad='medium'
        style={{ alignItems: 'center' }}
      >
        <StyledLink to='/exames'>
          <Anchor
            path='/exames'
            label='Exames'
            icon={<Icons.Clipboard />}
            hoverIndicator
          />
        </StyledLink>
        <StyledLink to='/agendamentos'>
          <Anchor
            path='/agendamentos'
            label='Agendamentos'
            icon={<Icons.Calendar />}
            hoverIndicator
          />
        </StyledLink>
        <StyledLink to='/clientes'>
          <Anchor
            path='/clientes'
            label='Clientes'
            icon={<Icons.User />}
            hoverIndicator
          />
        </StyledLink>
        <StyledTextInput placeholder='Buscar' value='' />
      </Nav>
    </Grommet>
  )
}

export default Navbar
