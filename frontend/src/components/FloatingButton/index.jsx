import { Fab } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import useStyles from './FloatingButton-Styled'

export default function FloatingButton() {
  const classes = useStyles();
  return (
    <>
      <Fab className={classes.button} color='primary' aria-label="add">
        <AddIcon />
      </Fab>
    </>
  )
}
