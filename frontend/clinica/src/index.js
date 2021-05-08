import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/Root';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthProvider from 'providers/auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CssBaseline />
      <Root />
    </AuthProvider>
  </React.StrictMode>, document.getElementById('root'));
