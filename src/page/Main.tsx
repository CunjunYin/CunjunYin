import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/Home';
import BlogPage from './Blog/Blog';
import { Typography } from '@mui/material';

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
      <main className='MuiTypography-body'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage/>} />
          </Routes>
        </Router>
      </main>
    )
  }
}