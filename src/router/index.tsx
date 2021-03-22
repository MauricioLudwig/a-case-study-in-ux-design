import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Page } from "../components/Page";

import Home, { components } from "../pages";

export const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      {components.map(({ name, path, component }) => (
        <Page key={path} title={name}>
          <Route path={path} component={component} />
        </Page>
      ))}
      <Redirect to="/" />
    </Switch>
  </Router>
);
