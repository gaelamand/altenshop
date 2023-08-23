import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTag, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import products from '../../assets/products.json';

const MainContainer = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [sortKey, setSortKey] = useState(''); // Ajout de l'état pour la clé de tri

    const totalItems = products.data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

    // Fonction de tri
    const sortProducts = (key) => {
        setSortKey(key);
    };

    // Fonction pour trier les produits en fonction de la clé sélectionnée
    const sortedProducts = [...products.data].sort((a, b) => {
        if (sortKey === 'category') {
            return a.category.localeCompare(b.category);
        } else if (sortKey === 'inventoryStatus') {
            return a.inventoryStatus.localeCompare(b.inventoryStatus);
        } else if (sortKey === 'rating') {
            return b.rating - a.rating;
        } else {
            return 0;
        }
    });



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
            <div className="bg-white p-4 rounded-lg shadow-md w-3/4 mb-4">
                <div className="flex items-center">
                    <select
                        className="border rounded p-1"
                        onChange={(e) => sortProducts(e.target.value)} // Appel de la fonction de tri
                    >
                        <option value="">Sort By:</option>
                        <option value="category">Category</option>
                        <option value="inventoryStatus">Inventory Status</option>
                        <option value="rating">Rating</option>
                    </select>

                    <div className="relative ml-4">
    <FontAwesomeIcon
        icon={faSearch}
        className="absolute text-gray-400 left-2 top-1/2 transform -translate-y-1/2"
    />
    <input
        type="text"
        placeholder="Search..."
        className="border rounded p-1 pl-8"
    />
</div>

                </div>
                <div className="border-b border-gray-300 my-4"></div>
                <div className="grid grid-cols-3 gap-4 w-full mt-6">
                    {sortedProducts
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((product) => (
                            <div key={product.id} className="bg-gray-50 p-4 rounded-lg shadow-md w-full">
                                <div className="flex flex-col text-center">
                                    <div className="flex justify-center">
                                        <FontAwesomeIcon icon={faTag} className="text-2xl" />
                                        <div className="ml-1">{product.category}</div>
                                    </div>
                                    <div className="mb-2">{product.inventoryStatus}</div>
                                    <div className="">{product.name}</div>
                                    <div className="">{product.description}</div>
                                    <div className="mb-6">Stars:
                                        {[...Array(5)].map((_, index) => (
                                            <FontAwesomeIcon
                                                key={index}
                                                icon={faStar}
                                                className={`text-white border-2  ${index < product.rating ? 'text-blue-800' : 'white'}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="mb-2 flex justify-center">
                                        ${product.price}
                                        <button className="ml-2 bg-blue-800 text-white rounded px-3 py-1">
                                            <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-1 mx-1"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Précédent
                    </button>
                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`bg-gray-200 hover:bg-gray-300 rounded px-3 py-1 mx-1 ${currentPage === pageNumber ? 'bg-gray-400' : ''}`}
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <button
                        className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-1 mx-1"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Suivant
                    </button>
                </div>
                <div className="mt-4 text-center text-gray-600">
                    Showing {startIndex} to {endIndex} of {totalItems} entries
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
