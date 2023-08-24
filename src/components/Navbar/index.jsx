import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../DarkMode/DarkModeContext';

const Navbar = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={`h-16 flex items-center justify-between px-6 ${isDarkMode ? 'bg-slate-400' : 'bg-slate-200'}`}>
      <div className="flex items-center ml-auto">
        <button className="mr-2" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faToggleOff : faToggleOn} className={`text-3xl mr-4 ${isDarkMode ? 'text-white' : ''}`} />
        </button>
        <div className="mr-2">
          <FontAwesomeIcon icon={faUserCircle} className={`text-3xl ${isDarkMode ? 'text-white' : ''}`} />
        </div>
        <div className={`${isDarkMode ? 'text-white' : ''}`}>
          John Doe
        </div>
      </div>
    </nav>
  );
}

export default Navbar;