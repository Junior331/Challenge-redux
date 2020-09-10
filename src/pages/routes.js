import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  /* PLOP_ROUTE_IMPORT */
  Home,
} from ".";
import { Layout, Header } from "../components/modules";

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Header props={props} />
        <Switch>
          {/* PLOP_INJECT_ROUTE */}
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
