import React from "react";
import "./styles.css";
import Banner from "./components/Banner.js";
import NavBar from "./components/Navbar";
import CategoryScreen from "./screens/Category.screen";

export default function App() {
  return (
    <div className="App">
      <div id="home-main">
        <NavBar />
        <CategoryScreen />
        <Banner />
      </div>
    </div>
  );
}
