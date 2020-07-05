import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  /* PLOP_ROUTE_IMPORT */
  Home,
} from ".";
import { Layout, Header } from "../components/modules";

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Switch>
          {/* PLOP_INJECT_ROUTE */}
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
