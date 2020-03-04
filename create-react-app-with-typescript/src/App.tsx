import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import MainRouter from './Page/MainRouter';

export default function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>

  );
}

/*
  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v4-beta example with TypeScript
        </Typography>
          <MainRouter />
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </BrowserRouter>

  );

*/