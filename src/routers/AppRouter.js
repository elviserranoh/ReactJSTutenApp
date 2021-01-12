import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { loginWithEmailAndPassword } from "../duck/user";
import { DashboardRoute } from "./DashboardRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loginWithEmailAndPassword(user));
    }
  }, [dispatch]);

  return (
    <Router basename='/'>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoute}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </div>
    </Router>
  );
};
