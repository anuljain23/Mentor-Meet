import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import NavBar from "./components/Navbar";
import CategoryScreen from "./screens/Category.screen";
import HomeScreen from "./screens/Home.screen";

export default function App() {
  return (
    <div className="App">
      <div id="home-main">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/category/:id" component={CategoryScreen} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
