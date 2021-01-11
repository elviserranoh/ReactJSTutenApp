import React from "react";
import { Route, Switch } from "react-router-dom";
import BookingScreen from "../components/booking/BookingScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoute = () => {
  return (
    <>
      
      <Navbar />

      <Switch>
        <Route path="/" component={BookingScreen} />
      </Switch>
    </>
  );
};
