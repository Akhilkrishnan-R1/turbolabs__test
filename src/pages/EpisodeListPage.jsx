import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Pagination, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

const EpisodeListPage = () => {

  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const handleNavigate = (url) => {
    navigate(url)
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
      <Stack direction={{
        xs: 'column',
        sm: 'row',
        md: 'row',
        lg: 'row',
        }} sx={{mt: 5}} >
        <Box width='30%'>
          <TextField label='Search by Episode Name' sx={{width: 200}} color='success' />
        </Box>
        <Box>
          <Box sx={{width: {
            xs: '300px',
            sm: '350px',
            md: '500px',
            lg: '700px',
          }, bgcolor: '#FCFF69FF'}}>
            <List>
              <ListItem disablePadding
                onClick={() => {handleNavigate('/episode/1')}}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <PlayArrowIcon/>
                  </ListItemIcon>
                  <ListItemText primary='S01E01-Ricks first' secondary='12/01/2006' />
                </ListItemButton>
              </ListItem>
              <Divider/>
            </List>
          </Box>
        </Box>
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

export default EpisodeListPage