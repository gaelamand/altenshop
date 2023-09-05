import React from 'react';
import ReactDOM from 'react-dom/client'; // Import de ReactDOM (version concurrente)
import './index.css'; // Import des styles CSS
import App from './App'; // Import du composant App principal
import reportWebVitals from './reportWebVitals'; // Import de la fonction pour mesurer les performances
import { BrowserRouter } from "react-router-dom"; // Import du composant BrowserRouter pour la gestion des routes
import { DarkModeProvider } from "./components/DarkMode/DarkModeContext"; // Import du contexte de mode sombre

// Utilisation de la méthode createRoot pour créer un point d'entrée React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu du composant App à l'intérieur de StrictMode, BrowserRouter et DarkModeProvider
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DarkModeProvider>
      <App />
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();