import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";

import { Component } from "react";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Header" Component={Header} />
        <Route exact path="/Product" Component={Product} />
        <Route exact path="Product" Component={Footer} />
      </Switch>
    );
  }
}

export default App;
