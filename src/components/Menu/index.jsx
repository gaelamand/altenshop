import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../DarkMode/DarkModeContext';

const Menu = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const firstSegment = pathnames[0];

  // Capitaliser la première lettre du premier segment
  const capitalizedFirstSegment =
    firstSegment?.charAt(0).toUpperCase() + firstSegment?.slice(1);

  return (
    <div className={`h-10 shadow-md flex items-center ${isDarkMode ? 'bg-slate-600' : 'bg-white'}`}>
      <Link className="ml-4" to="/">Home</Link>
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
