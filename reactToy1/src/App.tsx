import React from 'react';
import MainRouter from './Page/MainRouter';
import { mainTheme } from './Environment/Theme';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import Providers from './Context/Providers';

const App: React.FC = () => {
  return (
    <Providers>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
    </Providers>
  );
}


export default App;
