//@ts-check

import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Helmet from "react-helmet";
import Landing from "./pages/Landing";
import MapSearch from "./pages/MapSearch";
import MenuBar from "./components/MenuBar";
import "./App.css";

function App() {
  return (
    <Router>
      <Helmet>
        <title>MaxCardo ltd</title>
      </Helmet>
      <MenuBar />
      <Route path="/" exact component={Landing} />
      <Route path="/map-search" exact component={MapSearch} />
    </Router>
  );
}

export default App;
