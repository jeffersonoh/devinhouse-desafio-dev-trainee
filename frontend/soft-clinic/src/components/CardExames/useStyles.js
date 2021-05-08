import { makeStyles } from "@material-ui/core";

const UseStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: '80%',
    margin: '20px auto'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#fff',
    color: '#5c5cff'
  }
});

export default UseStyles;