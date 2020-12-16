import React from "react";
import Navbar from "../Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Footer from "./Footer/Footer";
import ScrollToTop from "../ScrollToTop";


function Routing() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routing;
