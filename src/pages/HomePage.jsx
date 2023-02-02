import { useQuery } from '@apollo/client'
import { Box, CircularProgress, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import CharacterCard from '../components/CharacterCard'
import { GET_CHARACTERS } from '../graphql/queries'

const overview = "Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Television Distribution. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into hijinks."

const HomePage = () => {

  const { data } = useQuery(GET_CHARACTERS, {
     fetchPolicy: "no-cache" 
    });

  return (
    <Stack direction='column' sx={{ paddingY:5, bgcolor: '#F5F5A4F9'}}>
      <Stack direction={{
        xs: 'col',
        sm: 'col',
        md: 'col',
        lg: 'row'
       }}>
        <Box sx={{maxWidth: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '70%'
        },
        padding: 5}}>
          <Typography variant='h4'>OVERVIEW</Typography>
          <Typography variant='subtitle1' component='p' sx={{mt: 2, '&::first-letter': {
            fontSize:20, 
          }}}>
            {overview}
          </Typography>
        </Box>
        
        <Box sx={{maxWidth: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '30%'
        },
        padding: 5}}>
          <Paper sx={{paddingX: 3, paddingY:2, textAlign: 'center',}}>
            <Typography variant='h6'>DETAILS</Typography>
            <Divider/>
            <Stack direction='column' gap={2}>
              <Typography>Genre : sci-fi, black comedy</Typography>
              <Typography>creators : Justin Roiland,    Dan Harmon</Typography>
              <Typography>No. of Episodes : 51</Typography>
            </Stack>
          </Paper>
        </Box>
      </Stack>
      <Box sx={{ paddingX: 5, justifyContent: 'center'}}>

      <Typography variant='h4' sx={{my: 5}}>Main Characters</Typography>
          { data ? (
            <Stack direction='row' gap={3} sx={{ justifyContent: 'center', overflowX: 'scroll', '&::-webkit-scrollbar':{
              width:0,
            }}}>
              { data.characters.results.slice(0,5).map(character => (
                <CharacterCard character={character} key={character.id} />
              ))}
            </Stack>
          ) : (
            <CircularProgress color='success' />
          )}
      </Box>
    </Stack>
  )
}

export default HomePage