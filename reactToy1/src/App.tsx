import React from 'react';
import MainRouter from './Page/MainRouter';
import { mainTheme } from './Environment/Theme';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}


export default App;
