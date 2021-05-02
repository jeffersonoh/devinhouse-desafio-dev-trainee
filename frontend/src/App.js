import { CssBaseline, makeStyles } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import GlobalThemeProvider from './styles/GlobalStyleProvider';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: "flex",
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <GlobalThemeProvider>
      <CssBaseline />
      <div className={classes.root}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </GlobalThemeProvider>
  );
}

export default App;
