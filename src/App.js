import React from "react";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu"
import MainContainer from "./components/MainContainer";
import Admin from "./components/Admin";
import { Route, Routes } from "react-router-dom";
import { useDarkMode } from './components/DarkMode/DarkModeContext';

const App = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex">
      <SideNav />
      <div className={`flex-grow ${isDarkMode ? 'bg-slate-400' : 'bg-slate-200'}`}>
        <Navbar />
        <Menu />
        <Routes>

          <Route
            path="/Products"
            element={<MainContainer />}
            />

          <Route
            path="/Admin/Products"
            element={<Admin />}
            />

        </Routes>
        
      </div>
    </div>
  );
}

export default App;
