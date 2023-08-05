import './App.css';
import React from 'react';
import './index.css';
import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';


function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgoundColor: '#000' }}>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>


    </BrowserRouter>

  );
}

export default App;
