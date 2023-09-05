import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTag, faStar, faSearch, faList, faTh } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../DarkMode/DarkModeContext';


const MainContainer = () => {
    // État local et initialisation
    const [currentPage, setCurrentPage] = useState(1);
    const [sortKey, setSortKey] = useState('');
    const [products, setProducts] = useState([]);
     // État pour affichage en grille ou en liste
    const [viewMode, setViewMode] = useState('grid');
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    // *** Récupération des données depuis le fichier json ***
    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("./products.json", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log('Received products:', result);
                setProducts(result.data);
            })
            .catch((error) => console.error('Error fetching products:', error));
    };
 // Chargement initial des données
    useEffect(() => {
        getData();
    }, []);

    // Calcul des valeurs de pagination
    const itemsPerPage = 6;
    const totalItems = products.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

    // Fonction de tri des produits
    const sortProducts = (key) => {
        setSortKey(key);
    };


 // Tri des produits en fonction de la clé de tri sélectionnée
    const sortedProducts = [...products].sort((a, b) => {
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

    return (
        <div className={`flex flex-col items-center justify-center pt-2 ${isDarkMode ? 'bg-slate-400' : 'bg-slate-200'}`}>
            <div className={`p-4 rounded-lg shadow-md w-3/4 mb-4 ${isDarkMode ? 'bg-slate-600' : 'bg-white'}`}>
                <div className="flex items-center h-6">
                    <select
                        className="border rounded p-1"
                        onChange={(e) => sortProducts(e.target.value)}
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
                    <button
                        className="bg-gray-200 hover:bg-gray-300 rounded p-2 ml-4"
                        onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                    >
                        <FontAwesomeIcon icon={viewMode === 'grid' ? faList : faTh} className="text-xl" />
                    </button>
                </div>
                <div className="border-b border-gray-300 my-4"></div>
                <div className={`grid ${viewMode === 'grid' ? 'grid-cols-3 gap-4' : ''} w-full`}>
                    {sortedProducts
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((product) => (
                            <div
                                key={product.id}
                                className={`bg-gray-50 p-3 rounded-lg shadow-md w-full ${viewMode === 'list' ? 'mb-2' : ''
                                    }`}
                                style={{ display: viewMode === 'list' ? 'flex' : 'block' }}
                            >
                                <div className="text-center">
                                    <div className={`flex ${viewMode === 'list' ? 'flex-row gap-6' : 'flex-col'}`}>
                                        <div className="flex justify-center">
                                            <FontAwesomeIcon icon={faTag} className="text-2xl" />
                                            <div className="ml-1">{product.category}</div>
                                        </div>
                                        <div className="mb-2">{product.inventoryStatus}</div>
                                        <div className="">{product.name}</div>
                                        <div className="">{product.description}</div>
                                        <div className={`mb-6 ${viewMode === 'list' ? 'flex' : 'block'}`}>
                                            {[...Array(5)].map((_, index) => (
                                                <FontAwesomeIcon
                                                    key={index}
                                                    icon={faStar}
                                                    className={`border border-gray-300 rounded ${index < product.rating ? 'text-blue-800' : 'text-white'
                                                        } ${viewMode === 'list' ? 'mr-2' : 'mx-1'}`}
                                                />
                                            ))}
                                        </div>
                                        <div
                                            className={`mb-2 ${viewMode === 'list' ? 'flex' : 'flex justify-center'
                                                }`}
                                        >
                                            ${product.price}
                                            <button className="ml-2 bg-blue-800 text-white rounded px-3 py-1">
                                                <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
                                            </button>
                                        </div>
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