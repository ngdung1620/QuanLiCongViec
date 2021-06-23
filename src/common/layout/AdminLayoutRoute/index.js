import React, { Component } from "react";
import { Route } from "react-router-dom";
import DashBoard from "../../../components/DashBoard/index";
class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, path, exact, name} = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          return (
            <DashBoard name={name} {...routeProps} >
              <YourComponent {...routeProps} />
            </DashBoard>
          );
        }}
      />
    );
  }
}

export default AdminLayoutRoute;
