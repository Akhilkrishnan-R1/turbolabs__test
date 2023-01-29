import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderBanner from './components/HeaderBanner'

import {
  HomePage,
    CharacterListPage,
    SingleCharacterPage,
    EpisodeListPage,
    SingleEpisodepage
} from './pages'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderBanner/>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/characters" element={<CharacterListPage/>} />
            <Route path="/character/:id" element={<SingleCharacterPage/>} />
            <Route path="/episodes" element={<EpisodeListPage/>} />
            <Route path="/episode/:id" element={<SingleEpisodepage/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App