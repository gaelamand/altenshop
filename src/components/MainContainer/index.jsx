import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const MainContainer = () => {

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
                {/* Première carte */}
                <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
                    <div className="flex flex-col text-center">
                        <div className="mb-2">
                            Accessories
                        </div>
                        <div className="mb-2">
                            INSTOCK
                        </div>
                        <div className="mb-2">
                            Bamboo Watch
                        </div>
                        <div className="mb-2">
                            Product Description
                        </div>
                        <div className="mb-2">
                            Stars
                        </div>
                        <div className="mb-2">
                            $65
                            <FontAwesomeIcon icon={faShoppingCart} className="ml-2 text-2xl" />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
                    <div className="flex flex-col">
                        <div className="mb-2">
                            Accessories
                        </div>
                        <div className="mb-2">
                            INSTOCK
                        </div>
                        <div className="mb-2">
                            Bamboo Watch
                        </div>
                        <div className="mb-2">
                            Product Description
                        </div>
                        <div className="mb-2">
                            Stars
                        </div>
                        <div className="mb-2 flex items-center">
                            $65
                            <FontAwesomeIcon icon={faShoppingCart} className="ml-2 text-2xl" />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
                    <div className="flex flex-col">
                        <div className="mb-2">
                            Accessories
                        </div>
                        <div className="mb-2">
                            INSTOCK
                        </div>
                        <div className="mb-2">
                            Bamboo Watch
                        </div>
                        <div className="mb-2">
                            Product Description
                        </div>
                        <div className="mb-2">
                            Stars
                        </div>
                        <div className="mb-2 flex items-center">
                            $65
                            <FontAwesomeIcon icon={faShoppingCart} className="ml-2 text-2xl" />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
                    <div className="flex flex-col">
                        <div className="mb-2">
                            Accessories
                        </div>
                        <div className="mb-2">
                            INSTOCK
                        </div>
                        <div className="mb-2">
                            Bamboo Watch
                        </div>
                        <div className="mb-2">
                            Product Description
                        </div>
                        <div className="mb-2">
                            Stars
                        </div>
                        <div className="mb-2 flex items-center">
                            $65
                            <FontAwesomeIcon icon={faShoppingCart} className="ml-2 text-2xl" />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
                    <div className="flex flex-col">
                        <div className="mb-2">
                            Accessories
                        </div>
                        <div className="mb-2">
                            INSTOCK
                        </div>
                        <div className="mb-2">
                            Bamboo Watch
                        </div>
                        <div className="mb-2">
                            Product Description
                        </div>
                        <div className="mb-2">
                            Stars
                        </div>
                        <div className="mb-2 flex items-center">
                            $65
                            <FontAwesomeIcon icon={faShoppingCart} className="ml-2 text-2xl" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
                    <div className="flex flex-col">
                        <div className="mb-2">
                            Accessories
                        </div>
                        <div className="mb-2">
                            INSTOCK
                        </div>
                        <div className="mb-2">
                            Bamboo Watch
                        </div>
                        <div className="mb-2">
                            Product Description
                        </div>
                        <div className="mb-2">
                            Stars
                        </div>
                        <div className="mb-2 flex items-center">
                            $65
                            <FontAwesomeIcon icon={faShoppingCart} className="ml-2 text-2xl" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;