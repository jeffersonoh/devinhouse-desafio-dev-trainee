import React, { useEffect, useState } from 'react'
import {
  Heading,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Text,
  Box,
  Grid
} from 'grommet'
import { listarExames } from '../lib/api'

function Exames () {
  const [exames, setExames] = useState([])

  useEffect(() => {
    const inicializar = async () => {
      const exames = await listarExames()
      setExames(exames)
    }

    inicializar()
  }, [])

  return (
    <>
      <Heading size='small' margin='medium'>
        Exames
      </Heading>
      <Grid gap='medium' columns='small' margin='medium'>
        {exames &&
          exames.map(exame => (
            <Card key={exame.id} gap='medium' background='light-1'>
              <CardHeader pad={{ horizontal: 'small', top: 'medium' }}>
                <Text weight='bold'>{exame.nome} </Text>
              </CardHeader>
              <CardBody gap='small' pad={{ horizontal: 'small' }}>
                <Box>ID do Exame: {exame.id}</Box>
              </CardBody>
              <CardFooter
                pad={{ horizontal: 'large', vertical: 'small' }}
              >
                
              </CardFooter>
            </Card>
          ))}
      </Grid>
    </>
  )
}

export default Exames
