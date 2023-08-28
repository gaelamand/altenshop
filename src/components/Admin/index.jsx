import React, { useState } from 'react';
import { useDarkMode } from '../DarkMode/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import products from '../../assets/products.json';

const itemsPerPage = 6; // Nombre d'éléments par page

const Admin = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = products.data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div>
      <div className={`h-14 mt-4 shadow-md flex items-center ${isDarkMode ? 'bg-slate-600' : 'bg-white'}`}>
        <button className="ml-4 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded">
          <FontAwesomeIcon icon={faPlus} className="mr-1" />
          New
        </button>
        <button className="ml-4 bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded">
          <FontAwesomeIcon icon={faTrash} className="mr-1" />
          Delete
        </button>
      </div>

      <div className={`mt-4 overflow-x-auto ${isDarkMode ? 'bg-slate-400' : 'bg-slate-200'}`}>
        <div className="max-w-screen-lg mx-auto">
          <table className="w-full table-fixed">
            <thead>
              <tr className="border-b">
                <th className="w-1/12 border-r bg-white text-center p-2 text-sm">Select</th>
                <th className="w-1/4 border-r bg-white text-left p-2 text-sm">Code</th>
                <th className="w-1/4 border-r bg-white text-left p-2 text-sm">Name</th>
                <th className="w-1/4 border-r bg-white last:text-left p-2 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.data
                .slice(startIndex, endIndex)
                .map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="w-1/12 border-2 text-center h-16 p-2"><input type="checkbox" /></td>
                    <td className="w-1/4 border-2 text-left text-sm p-2">{item.code}</td>
                    <td className="w-1/4 border-2 text-left text-sm p-2">{item.name}</td>
                    <td className="w-1/4 border-2 text-left text-sm p-2">
                      <button className="mr-4 text-blue-500 hover:text-blue-700">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-center py-2 bg-white">
                  <div className="flex justify-center mt-4 ">
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
                    Showing {startIndex + 1} to {endIndex} of {totalItems} entries
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
