import React from 'react';
import { Header, Footer } from './components'
import { Main } from './page'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { light } from './theme';

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const theme = React.useMemo(() => createTheme(light), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Main></Main>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
