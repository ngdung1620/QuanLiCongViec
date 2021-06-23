import { ThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading/index";
import { ADMIN_ROUTER, ROUTERS } from "../../constants/index";
import AdminLayoutRoute from "../../common/layout/AdminLayoutRoute/index";
import theme from "./../../common/theme";
import CommonModal from "./../../components/Modal/index";
import configureStore from "./../../redux/configureStore";
import CssBaseline from "@material-ui/core/CssBaseline";
import DefaultLayoutRoute from "./../../common/layout/DefaultLayoutRoute";
const store = configureStore();

class App extends Component {
  renderAdminRouter() {
    let xhtml = null;
    xhtml = ADMIN_ROUTER.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          name={route.name}
          exact={route.exact}
          component={route.component}
        />
      );
    });
    return xhtml;
  }
  renderDefaultLayoutRouter() {
    let xhtml = null;
    xhtml = ROUTERS.map((route) => {
      return (
        <DefaultLayoutRoute
          key={route.path}
          path={route.path}
          name={route.name}
          exact={route.exact}
          component={route.component}
        />
      );
    });
    return xhtml;
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalLoading />
            <ToastContainer />
            <CommonModal />
            <Switch>
              {this.renderAdminRouter()}
              {this.renderDefaultLayoutRouter()}
            </Switch>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
// function App() {
//   return (
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <GlobalLoading />
//         <ToastContainer />
//         <CommonModal />
//         <TaskBoard />
//       </ThemeProvider>
//     </Provider>
//   );
// }

// export default App;
