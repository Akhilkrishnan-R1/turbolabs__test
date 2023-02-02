import { Box, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const EpisodeList = ({episode}) => {

    const navigate = useNavigate()

  const handleNavigate = (url) => {
    navigate(url)
  }

  return (
    <Box>
        <ListItem disablePadding
                onClick={() => {handleNavigate(`/episode/${episode.id}`)}}
            >
            <ListItemButton>
                <ListItemIcon>
                    <PlayArrowIcon/>
                </ListItemIcon>
                <ListItemText primary={`${episode.episode} - ${episode.name}`} secondary={episode.air_date} />
            </ListItemButton>
        </ListItem>
        <Divider/>
    </Box>
  )
}

export default EpisodeList