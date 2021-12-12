import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import NavBar from "./components/Navbar";
import CategoryScreen from "./screens/Category.screen";
import HomeScreen from "./screens/Home.screen";

export default function App() {
  return (
    <div className="App">
      <div id="home-main">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/category/:id" component={CategoryScreen} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
