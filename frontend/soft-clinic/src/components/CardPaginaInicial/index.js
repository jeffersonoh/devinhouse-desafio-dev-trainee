import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Button, Collapse } from "@material-ui/core";
import useStyles from "./useStyles";

export default function CardPaginaInicial({
  title,
  subtitle,
  textParagraph,
  buttonLink,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions disbleSpacinag>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{title}:</Typography>
            <Typography paragraph>{textParagraph}</Typography>
            <Button style={{textDecoration: 'none' ,backgroundColor: '#5c5cff', color: '#fff'}}>{buttonLink}</Button>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
