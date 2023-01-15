import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Header, Footer} from './core/components'
import { Main } from './page'
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
