import { Box, CircularProgress, Divider, List, Stack, Typography } from '@mui/material'
import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_SINGLE_CHARACTER } from '../graphql/queries';
import EpisodeList from '../components/EpisodeList';
import ErrorIcon from '@mui/icons-material/Error';

const SingleCharacterPage = () => {

  const { id } = useParams()

  const { error, loading, data } = useQuery(GET_SINGLE_CHARACTER, {
    variables : {
      "characterId": id
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
      <Box>
        <Typography  variant='h4'>{data.character.name.toUpperCase()}</Typography>
      </Box>
      <Divider/>
      <Stack direction={{
         xs: 'column',
         sm: 'row',
         md: 'row',
         lg: 'row',
      }} sx={{mt: 5}}>
        {/*character image*/}
        <Box sx={{width: '30%', padding: 5}}>
          <img width= '250px' height='300px' src={data.character.image} alt='characterimage'/>
        </Box>
        {/*character details */}
        <Stack direction='column' sx={{display: 'flex', marginX: 'auto', marginY: 'auto',width: '70%'}}>
          <Typography variant='h6'>Origin : {data.character.origin.name}</Typography>
          <Typography variant='h6'>Species : {data.character.species}</Typography>
          <Typography variant='h6'>Location : {data.character.location.name}</Typography>
          <Typography variant='h6'>Gender : {data.character.gender}</Typography>
        </Stack>
      </Stack>
      <Box sx={{marginTop: 5}}>
        <Typography variant='h5'>APPEARANCES</Typography>
      </Box>
      <Divider/>
      {/*character episodes */}
      <Box sx={{width: {
            xs: '300px',
            sm: '350px',
            md: '500px',
            lg: '700px',
          }, bgcolor: '#FCFF69FF', marginX: 'auto', mt: 5, maxHeight: 300, overflow: 'scroll', '&::-webkit-scrollbar':{
            width:0,
          }}}>
            <List>
              {data.character.episode.map(episode => (
              <EpisodeList key={episode.id} episode={episode}/>
                ))}
            </List>
          </Box>
    </Stack>
  )}
}

export default SingleCharacterPage