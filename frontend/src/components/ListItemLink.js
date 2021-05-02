import { useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default function ListItemLink({ icon, name, to }) {
  const CustomLink = useMemo(
    () => forwardRef((props, ref) => <Link ref={ref} to={to} {...props} />),
    [to]
  );

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </li>
  );
}
