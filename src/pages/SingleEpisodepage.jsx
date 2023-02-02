import { Box, CircularProgress, Divider, Stack, Typography } from '@mui/material'
import CharacterCard from '../components/CharacterCard'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_SINGLE_EPISODE } from '../graphql/queries'
import ErrorIcon from '@mui/icons-material/Error';

const SingleEpisodepage = () => {

  const { id } = useParams();
  const { error, loading, data } = useQuery(GET_SINGLE_EPISODE, {
    variables: {
      "episodeId": id
    }
  })

  if (error) {
    return <Box>
      <Typography variant='h4'>Something Went Wrong <ErrorIcon/></Typography>
    </Box>
  }

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center'}}>
              <CircularProgress color='success' />
          </Box>
  }

  if (data) {
  return (
    <Stack direction='column' sx={{padding: 5, backgroundColor: '#F5F5A4F9'}}>
      {/*episode details */}
      <Box>
        <Typography variant='h4'>{data.episode.episode} - {data.episode.name}</Typography>
        <Typography>Aired on : {data.episode.air_date}</Typography>
      </Box>
      <Divider/>
      <Stack direction='column'>
        <Box sx={{marginY: 5}}>
          <Typography variant='h5'>CHARACTERS</Typography>
          <Divider/>
        </Box>
        {/*characters appeared */}
        <Stack direction='row' flexWrap='wrap' gap={2} >
          {data.episode.characters.map(character => (
            <CharacterCard key={character.id}  character={character}/>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )}
}

export default SingleEpisodepage