import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component"
import './App.css';
import LeadList from "./components/lead-list.component";
import CreateLead from "./components/create-lead.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={LeadList} />
        <Route path="/create" component={CreateLead} />
      </div>
    </Router>
  );
}

export default App;
