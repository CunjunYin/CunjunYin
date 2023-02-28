import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import {Header, Footer} from './core/components'
import { Main } from './page'
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [theme, setTheme] = useState<string>('light');
  
  let handleThemeChange = (theme: string) => {
    setTheme(theme);
  }

  return (
    <>
      <Header handleThemeChange={handleThemeChange}></Header>
      <Main theme={theme}></Main>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
