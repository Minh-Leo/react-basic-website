import React from "react";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </PageWrapper>
    </Router>
  );
}

export default App;
