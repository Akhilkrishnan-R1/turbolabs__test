import { useQuery } from '@apollo/client'
import { Box, CircularProgress, Divider, MenuItem, Pagination, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import { GET_CHARACTERS } from '../graphql/queries'
import ErrorIcon from '@mui/icons-material/Error';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const CharacterListPage = () => {

  const [page, setPage] = useState(1)
  const [gender, setGender] = useState("")
  const [name, setName] = useState("")
  const [species, setSpecies] = useState("")
  const [status, setStatus] = useState("")


  const { error, loading, data } = useQuery(GET_CHARACTERS, {
    variables: {
      "filter": {
        "gender": gender,
        "name": name,
        "species": species,
        "status": status
      },
      "page": page
    }
  });

  

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
            {/*Filters*/}
        <Stack direction='column' spacing={2} width='30%'>
          <TextField label='Search by name' 
            sx={{width: 200}} 
            color='success'
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            />
          <TextField label='Status'  select  
            sx={{width: 200}} 
            color='success'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="">Status</MenuItem>
              <MenuItem value='alive'>Alive</MenuItem>
              <MenuItem value='dead'>Dead</MenuItem>
          </TextField>
          <TextField label='Species' select  
            sx={{width: 200}} 
            color='success'
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            >
          <MenuItem value="">Species</MenuItem>
          <MenuItem value='Human'>Human</MenuItem>
          <MenuItem value='Alien'>Alien</MenuItem>
          </TextField>
          <TextField label='Gender' select  
            sx={{width: 200}} 
            color='success'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            >
          <MenuItem value="">Gender</MenuItem>
          <MenuItem value='male'>Male</MenuItem>
          <MenuItem value='female'>Female</MenuItem>
          </TextField>
        </Stack>
        {/*CharacterCards*/}
        <Stack direction='row' gap={2} flexWrap='wrap' width='70%'>
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

            {data && data.characters?.results?.map(character => (
                <CharacterCard character={character} key={character.id} />
            ))}
        </Stack>
      </Stack>
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 6}}>
        {/*Pagination*/}
        <Pagination count={data?.characters?.info?.pages ? (data.characters.info.pages) : (1)}
          onChange={(_, value) => {
            setPage(value);}}
        />
      </Box>
    </Stack>
  )
}

export default CharacterListPage