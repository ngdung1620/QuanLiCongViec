import React, { Component } from "react";
import { Route } from "react-router-dom";
class DefaultLayoutRoute extends Component {
  render() {
    const { component: YourComponent, path, exact } = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          return <YourComponent {...routeProps} />;
        }}
      />
    );
  }
}

export default DefaultLayoutRoute;
