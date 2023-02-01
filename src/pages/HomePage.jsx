import { Box, Card, CardMedia, Stack } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <div style={{height: '100vh', backgroundColor: '#F5F5A4F9'}}>
      <Stack direction={{
        xs: 'col',
        sm: 'col',
        md: 'col',
        lg: 'row'
       }}>
        <Box sx={{width: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '50%'
        },
        padding: 5}}>
          
        </Box>
        <Box sx={{width: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '50%'
        },
        padding: 5}}>
          <Card>
          <CardMedia
        component="iframe"
        alt="green iguana"
        height="140"
        image="https://youtu.be/jerFRSQW9g8"
        />
          </Card>
        </Box>
      </Stack>
    </div>
  )
}

export default HomePage