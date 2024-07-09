import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

// import { Routes } from './routes';

import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AuthProvider>
        <Home />
      </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>,
)


