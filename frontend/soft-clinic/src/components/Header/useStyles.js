import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    justifyContent: 'spaceBetween',
    backgroundColor: '#ffffff',
    color: '#5c5cff',
    contrastText: 'black',
   
  },
    root: {
      flexGrow: 1,
      justify: 'space-evenly',
      contrastText: '#5c5cff',
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    titleButton: {
      color: '#5c5cff',
      alignItems: 'flex-end',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },

    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    
  }));

  export default useStyles;