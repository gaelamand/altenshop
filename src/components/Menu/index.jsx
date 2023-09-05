// Menu.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../DarkMode/DarkModeContext';

const Menu = () => {
  // Utilise le contexte DarkMode pour obtenir l'état du mode sombre et la fonction de bascule
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Utilise le hook useLocation pour obtenir l'objet de l'emplacement actuel
  const location = useLocation();

  // Divise le chemin de l'emplacement en segments et filtre les segments vides
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Obtient le premier segment du chemin
  const firstSegment = pathnames[0];

  // Capitalise la première lettre du premier segment
  const capitalizedFirstSegment =
    firstSegment?.charAt(0).toUpperCase() + firstSegment?.slice(1);

  return (
    <div className={`h-10 shadow-md flex items-center ${isDarkMode ? 'bg-slate-600' : 'bg-white'}`}>
      
      {/* Lien vers la page d'accueil */}
      <Link className="ml-4" to="/">Home</Link>

      {/* Affiche le chevron et le segment de chemin s'il existe */}
      {firstSegment && (
        <React.Fragment>
          <span className="m-2">  <FontAwesomeIcon icon={faChevronRight}/> </span>
          <span>{capitalizedFirstSegment}</span>
        </React.Fragment>
      )}
    </div>
  );
};

export default Menu;
