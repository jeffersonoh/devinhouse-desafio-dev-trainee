import { useState } from "react";
import { Route, Switch } from "react-router";
import Header from "../components/Header";
import MenuDrawer from "../components/MenuDrawer";

const AppRouter = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <>
      <Header onToggleMenu={() => setOpenMenu((prevOpenMenu) => !prevOpenMenu)} />
      <MenuDrawer open={openMenu} />
      {/* <Switch>
        <Route 
          exact path="/"
          render={(props) => <Header {...props} onToggleMenu={() => setOpenMenu((prevOpenMenu) => !prevOpenMenu)} />}
        />
      </Switch> */}
    </>
  );
};

export default AppRouter;
