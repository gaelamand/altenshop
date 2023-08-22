import React from "react";
import altenlogo from "../../assets/altenlogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {


  return (
    <aside className="bg-custom-color h-screen w-1/5 p-4 flex flex-col">
      <div className="flex items-center mb-4">
        <img src={altenlogo} alt="Logo" className="h-12 mr-2" />
        <div className="text-white text-2xl">
          Alten Shop
        </div>
      </div>
      <div className="text-white text-lg mb-4 hover:bg-white hover:text-custom-color hover:cursor-pointer transition duration-300 ease-in-out">
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        Products
      </div>
      <div className="text-white text-lg hover:bg-white hover:text-custom-color hover:cursor-pointer transition duration-300 ease-in-out">
      <FontAwesomeIcon icon={faCog} className="mr-2" />
        Admin
      </div>
    </aside>
  );

};

export default SideNav