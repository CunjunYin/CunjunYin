import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, TaxonomyPage, BlogPage} from './page'
import 'react-toastify/dist/ReactToastify.css';
import './scss/bootstrap.scss'


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/taxonomy" element={<TaxonomyPage />} />
        </Routes>
        <ToastContainer />
      </Suspense>
  </Router>
  );
}

export default App;
