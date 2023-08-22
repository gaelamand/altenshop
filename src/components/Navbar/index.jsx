import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white h-16 flex items-center justify-between px-6 text-black">
      <div className="flex items-center ml-auto">
        <button className="mr-2">
          <FontAwesomeIcon icon={faToggleOn} className="text-3xl mr-4" />
        </button>
        <div className="mr-2">
          <FontAwesomeIcon icon={faUserCircle} className="text-3xl" />
        </div>
        <div>
          John Doe
        </div>
      </div>
    </nav>
  );
}

export default Navbar;