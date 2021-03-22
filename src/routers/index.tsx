import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home, { components } from "../pages";

export const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      {components.map(({ path, component }) => (
        <Route key={path} path={path} component={component} />
      ))}
      <Redirect to="/" />
    </Switch>
  </Router>
);
