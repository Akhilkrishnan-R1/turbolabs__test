import { Box, Divider, Pagination, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'

const CharacterListPage = () => {

  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const handleNavigate = (url) => {
    navigate(url)
  }
  console.log(page)
  return (
    <Stack direction='column' sx={{padding: 5, backgroundColor: '#F5F5A4F9'}}>
      <Box>
        <Typography variant='h4'>CHARACTERS</Typography>
      </Box>
      <Divider/>
      <Stack direction={{
        xs: 'column',
        sm: 'row',
        md: 'row',
        lg: 'row',
      }} 
          sx={{mt: 5}}>
        <Stack direction='column' spacing={2} width='30%'>
          <TextField label='Search by name' sx={{width: 200}} color='success' />
          <TextField label='Status'  select  sx={{width: 200}} color='success'></TextField>
          <TextField label='Species' select  sx={{width: 200}} color='success'></TextField>
          <TextField label='Gender' select  sx={{width: 200}} color='success'></TextField>
        </Stack>
        <Divider orientation='vertical' />
        <Stack direction='row' gap={2} flexWrap='wrap' width='70%'>
          <Box onClick={() => {handleNavigate('/character/1')}}>
          <CharacterCard />
              </Box>
        </Stack>
      </Stack>
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 6}}>
        <Pagination count={10}
          onChange={(_, value) => {
            setPage(value);}}
        />
      </Box>
    </Stack>
  )
}

export default CharacterListPage