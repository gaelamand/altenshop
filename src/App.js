import React from "react";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu"
import MainContainer from "./components/MainContainer";
import Admin from "./components/Admin";
import { Route, Routes } from "react-router-dom";
import { useDarkMode } from './components/DarkMode/DarkModeContext';

const App = () => {
  // Utilisation du contexte DarkMode
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex">
      {/* Affichage de la barre latérale */}
      <SideNav />
      <div className={`flex-grow ${isDarkMode ? 'bg-slate-400' : 'bg-slate-200'}`}>
        {/* Affichage de la barre de navigation */}
        <Navbar />
        {/* Affichage du menu */}
        <Menu />
        {/* Gestion des routes avec le composant Routes */}
        <Routes>
          {/* Route pour afficher le composant MainContainer */}
          <Route
            path="/Products"
            element={<MainContainer />}
          />
          {/* Route pour afficher le composant Admin */}
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
