import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CharacterCard = ({character}) => {

  const navigate = useNavigate()
  const handleNavigate = (url) => {
    navigate(url)
  }

  return (
    <Box width={{
      xs: '100px',
      sm: '125px',
      md: '200px',
      lg: '200px',
    }} onClick={() => {handleNavigate(`/character/${character.id}`)}}>
        <Card>
            <CardMedia
                component='img'
                width={{
                  xs: '100px',
                  sm: '125px',
                  md: '200px',
                  lg: '200px',
                }}
                image={character.image}
            />
            <CardContent>
                <Typography variant='subtitle1'>{character.name}</Typography>
            </CardContent>
        </Card>
    </Box>
  )
}

export default CharacterCard