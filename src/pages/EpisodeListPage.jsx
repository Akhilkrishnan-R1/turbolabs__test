import { useQuery } from '@apollo/client';
import { Box, CircularProgress, Divider, List, Pagination, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import EpisodeList from '../components/EpisodeList';
import { GET_EPISODES } from '../graphql/queries';
import ErrorIcon from '@mui/icons-material/Error';

const EpisodeListPage = () => {

  const [page, setPage] = useState(1)
  const [name, setName] = useState("")
  const [episode, setEpisode] = useState("")

  const { error, loading, data } = useQuery(GET_EPISODES, {
    variables: {
      "filter": {
        "name": name,
        "episode": episode
      },
      "page": page
    }
  })

  if (error) {
    return <Box>
      <Typography variant='h3'>Something Went Wrong <ErrorIcon/></Typography>
    </Box>
  }


  return (
    <Stack direction='column'
    sx={{padding: 5, backgroundColor: '#F5F5A4F9'}}
    >
      <Box>
        <Typography
          variant='h4'
        >EPISODES</Typography>
      </Box>
      <Divider/>
      {/*filters*/}
      <Stack direction={{
        xs: 'column',
        sm: 'row',
        md: 'row',
        lg: 'row',
        }} sx={{mt: 5}} >
        <Stack width='30%' direction='column' gap={2}>
          <TextField label='Search by Episode Name' 
            sx={{width: 200}} 
            color='success'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <TextField label='Search by Episode' 
            sx={{width: 200}} 
            color='success'
            value={episode}
            onChange={(e) => setEpisode(e.target.value)}
            />
        </Stack>

        <Box>
          <Box sx={{width: {
            xs: '300px',
            sm: '350px',
            md: '500px',
            lg: '700px',
          }, height: {
            xs: '400px',
            sm: '600px',
            md: '600px',
            lg: '800px',
          }, overflowY: 'scroll', bgcolor: '#FCFF69FF'}}>
              {/*List of Episodes */}
              {error && 
                <Box>
                  <Typography variant='h4'>Something Went Wrong <ErrorIcon/></Typography>
                </Box>
              }  

              {loading && 
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                  <CircularProgress color='success' />
                </Box>
              }

            {data && data.episodes?.results?.map(episode => (
                <EpisodeList episode={episode} key={episode.id} />
            ))}
          </Box>
        </Box>
      </Stack>
      {/*pagiantion */}
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 6}}>
        <Pagination count={data?.episodes?.info?.pages ? (data.episodes.info.pages) : (1)}
          onChange={(_, value) => {
            setPage(value);}}
        />
      </Box>
    </Stack>
  )
}

export default EpisodeListPage