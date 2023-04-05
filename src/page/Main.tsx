import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/Home';
import BlogPage from './Blog/Blog';

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