import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          {/* <Switch> */}
          {/* <Route path="/" component={Header} /> */}
          {/* </Switch> */}
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Routes;
