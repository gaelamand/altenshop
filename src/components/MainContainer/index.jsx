import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import products from '../../assets/products.json';

const MainContainer = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //   // Modifiez l'URL de l'API + modifier le map qui permet de boucler
    //   axios.get('https://votre-api.com/products')
    //     .then(response => {
    //       setProducts(response.data);
    //     })
    //     .catch(error => {
    //       console.error('Erreur lors de la récupération des produits :', error);
    //     });
    // }, []);

    return (
      <div className="flex flex-col items-center justify-center mt-2">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-3/4 mb-4">
          <div className="flex items-center">
            <select className="border rounded p-1">
              <option>Sort By:</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded ml-4 p-1"
            />
          </div>
          <div className="border-b border-gray-300 my-4"></div>
          <div className="grid grid-cols-3 gap-4 w-full mt-6">
            {products.data.map((product) => (
              <div key={product.id} className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
                <div className="flex flex-col text-center">
                  <div className="mb-2">{product.category}</div>
                  <div className="mb-2">{product.inventoryStatus}</div>
                  <div className="mb-2">{product.name}</div>
                  <div className="mb-2">{product.description}</div>
                  <div className="mb-2">Stars: {product.rating}</div>
                  <div className="mb-2 flex items-center">
                    ${product.price}
                    <FontAwesomeIcon icon={faShoppingCart} className="ml-2 text-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default MainContainer;