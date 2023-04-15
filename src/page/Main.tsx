import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/Home';
import BlogPage from './Blog/Blog';
import { Box } from '@mui/material';

interface MainProps {
}

interface MainState {
}


export default class Main extends React.Component<MainProps, MainState> {

  constructor(props: MainProps) {
    super(props);
  }

  render() {
    return (
      <main>
        <Box sx={{ backgroundColor: 'background.default' }}>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/blog' element={<BlogPage/>} />
            </Routes>
          </Router>
        </Box>
      </main>
    )
  }
}