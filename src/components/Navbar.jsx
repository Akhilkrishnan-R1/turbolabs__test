import { AppBar, Button, createTheme, Stack, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const theme = createTheme({
  typography: {
    fontFamily: [
      'Permanent Marker',
      'cursive',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#18ABC6',
    },  
  }
})

const Navbar = () => {

  const navigate = useNavigate();
  {/*function to navigate to page onclick*/}
  const handleNavigate = (url) => {
    navigate(url)
  }

  return (
    <ThemeProvider theme={theme}>
    <AppBar position='fixed' sx={{display:'flex', alignItems:'center', backgroundColor: 'rgba(51, 245, 2, 0.61)'}}>
        <Toolbar>
          <Stack direction='row' alignItems='center' spacing={5}>
            <Typography color='primary.main'
              sx={{textShadow : 'rgb(240, 245, 113) 3px 0px 0px, rgb(240, 245, 113) 2.83487px 0.981584px 0px, rgb(240, 245, 113) 2.35766px 1.85511px 0px, rgb(240, 245, 113) 1.62091px 2.52441px 0px, rgb(240, 245, 113) 0.705713px 2.91581px 0px, rgb(240, 245, 113) -0.287171px 2.98622px 0px, rgb(240, 245, 113) -1.24844px 2.72789px 0px, rgb(240, 245, 113) -2.07227px 2.16926px 0px, rgb(240, 245, 113) -2.66798px 1.37182px 0px, rgb(240, 245, 113) -2.96998px 0.42336px 0px, rgb(240, 245, 113) -2.94502px -0.571704px 0px, rgb(240, 245, 113) -2.59586px -1.50383px 0px, rgb(240, 245, 113) -1.96093px -2.27041px 0px, rgb(240, 245, 113) -1.11013px -2.78704px 0px, rgb(240, 245, 113) -0.137119px -2.99686px 0px, rgb(240, 245, 113) 0.850987px -2.87677px 0px, rgb(240, 245, 113) 1.74541px -2.43999px 0px, rgb(240, 245, 113) 2.44769px -1.73459px 0px, rgb(240, 245, 113) 2.88051px -0.838247px 0px',
                    cursor: 'pointer'}}
                  onClick={() => handleNavigate('/')}
                    >
              HOME
            </Typography>
            <Typography color='primary.main'
              sx={{textShadow : 'rgb(240, 245, 113) 3px 0px 0px, rgb(240, 245, 113) 2.83487px 0.981584px 0px, rgb(240, 245, 113) 2.35766px 1.85511px 0px, rgb(240, 245, 113) 1.62091px 2.52441px 0px, rgb(240, 245, 113) 0.705713px 2.91581px 0px, rgb(240, 245, 113) -0.287171px 2.98622px 0px, rgb(240, 245, 113) -1.24844px 2.72789px 0px, rgb(240, 245, 113) -2.07227px 2.16926px 0px, rgb(240, 245, 113) -2.66798px 1.37182px 0px, rgb(240, 245, 113) -2.96998px 0.42336px 0px, rgb(240, 245, 113) -2.94502px -0.571704px 0px, rgb(240, 245, 113) -2.59586px -1.50383px 0px, rgb(240, 245, 113) -1.96093px -2.27041px 0px, rgb(240, 245, 113) -1.11013px -2.78704px 0px, rgb(240, 245, 113) -0.137119px -2.99686px 0px, rgb(240, 245, 113) 0.850987px -2.87677px 0px, rgb(240, 245, 113) 1.74541px -2.43999px 0px, rgb(240, 245, 113) 2.44769px -1.73459px 0px, rgb(240, 245, 113) 2.88051px -0.838247px 0px',
                  cursor: 'pointer'}}
                  onClick={() => handleNavigate('/characters')}
                  >
              CHARACTERS
            </Typography>
            <Typography color='primary.main'
              sx={{textShadow : 'rgb(240, 245, 113) 3px 0px 0px, rgb(240, 245, 113) 2.83487px 0.981584px 0px, rgb(240, 245, 113) 2.35766px 1.85511px 0px, rgb(240, 245, 113) 1.62091px 2.52441px 0px, rgb(240, 245, 113) 0.705713px 2.91581px 0px, rgb(240, 245, 113) -0.287171px 2.98622px 0px, rgb(240, 245, 113) -1.24844px 2.72789px 0px, rgb(240, 245, 113) -2.07227px 2.16926px 0px, rgb(240, 245, 113) -2.66798px 1.37182px 0px, rgb(240, 245, 113) -2.96998px 0.42336px 0px, rgb(240, 245, 113) -2.94502px -0.571704px 0px, rgb(240, 245, 113) -2.59586px -1.50383px 0px, rgb(240, 245, 113) -1.96093px -2.27041px 0px, rgb(240, 245, 113) -1.11013px -2.78704px 0px, rgb(240, 245, 113) -0.137119px -2.99686px 0px, rgb(240, 245, 113) 0.850987px -2.87677px 0px, rgb(240, 245, 113) 1.74541px -2.43999px 0px, rgb(240, 245, 113) 2.44769px -1.73459px 0px, rgb(240, 245, 113) 2.88051px -0.838247px 0px',
                      cursor: 'pointer'}}
                      onClick={() => handleNavigate('/episodes')}
                      >
              EPISODES
            </Typography>
          </Stack>
        </Toolbar>
    </AppBar>
    </ThemeProvider>
  )
}

export default Navbar
