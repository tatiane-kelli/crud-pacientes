import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { AddPatient } from "../pages/Register";

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={AddPatient} exact path="/patients/create" />
    </BrowserRouter>
  );  
};

export default Routes;