import React from "react";
import { 
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";
import { AddPatient } from "../pages/Register";
import { DeletePatient } from "../pages/Delete";
import { UpdatePatient } from "../pages/Update";
import { ListPatients } from "../pages/List";

const PagesRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route component={AddPatient} exact path="/patients/create" />
        <Route component={DeletePatient} exact path="/patients/delete" />
        <Route component={UpdatePatient} exact path="/patients/update" />
        <Route component={ListPatients} exact path="/" />
      </Routes>
    </Router>
  );  
};

export default PagesRoutes;