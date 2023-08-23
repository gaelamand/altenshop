import React from "react";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu"
import MainContainer from "./components/MainContainer";
// import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-grow">
        <Navbar />
        <Menu />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
