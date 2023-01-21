import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/Home';
import BlogPage from './Blog/Blog';

export default class Main extends React.Component {

  render() {
    return (
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />
          </Routes>
        </Router>
      </main>
    )
  }
}