import { Box, Divider, Stack, Typography } from '@mui/material'
import CharacterCard from '../components/CharacterCard'
import React from 'react'

const SingleEpisodepage = () => {
  return (
    <Stack direction='column' sx={{padding: 5, backgroundColor: '#F5F5A4F9'}}>
      <Box>
        <Typography variant='h4'>S01E01 - RICKS FIRST</Typography>
        <Typography>Aired on : 21/08/2021</Typography>
      </Box>
      <Divider/>
      <Stack direction='column'>
        <Box sx={{marginY: 5}}>
          <Typography variant='h5'>CHARACTERS</Typography>
          <Divider/>
        </Box>
        <Stack direction='row' flexWrap='wrap'>
          <CharacterCard />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SingleEpisodepage