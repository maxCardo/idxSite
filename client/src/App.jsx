//@ts-check

import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
    </Router>
  );
}

export default App;
