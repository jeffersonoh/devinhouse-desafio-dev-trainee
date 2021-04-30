import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import GlobalThemeProvider from './styles/GlobalStyleProvider';

function App() {
  return (
    <GlobalThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </GlobalThemeProvider>
  );
}

export default App;
