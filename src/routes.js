import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exac path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
