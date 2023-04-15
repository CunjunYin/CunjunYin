import React, { useState } from 'react';
import { Header, Footer } from './core/components'
import { Main } from './page'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { light } from './theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ColorModeContext = React.createContext(light);
function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
