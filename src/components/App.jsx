import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";

import useStyles from "./styles";

import { Actors, MovieInformation, NavBar, Movies, Profile } from "./index";
import useAlan from "./Alan";
import { useRef } from "react";

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/movie/:id" exact>
            <MovieInformation />
          </Route>
          <Route path="/actors/:id" exact>
            <Actors />
          </Route>
          <Route path={["/", "/approved"]} exact>
            <Movies />
          </Route>
          <Route path="/profile/:id" exact>
            <Profile />
          </Route>
        </Switch>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
