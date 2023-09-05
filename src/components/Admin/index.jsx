import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../DarkMode/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
// import { handleDelete, handlePatch, handlePost, handleGet } from './apiFunctions'; Import des fonctions d'API 

const Admin = () => {
  // État local et initialisation
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingRows, setEditingRows] = useState([]);
  const [editedValues, setEditedValues] = useState({});
  // Gestion des champs de saisie pour ajouter un nouveau produit
  const [newProductCode, setNewProductCode] = useState("");
  const [newProductName, setNewProductName] = useState("");

  // *** Récupération des données depuis le fichier json ***
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("../products.json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('Produits reçus :', result);
        setProducts(result.data);
      })
      .catch((error) => console.error('Erreur lors de la récupération des produits :', error));
  };
  // Chargement initial des données
  useEffect(() => {
    getData();
  }, []);


  // *** Fonction de suppression d'un produit ***
  const handleDelete = (productId) => {
    console.log('Delete button clicked for product ID:', productId);

    const updatedData = products.filter((item) => item.id !== productId);

    setProducts(updatedData);
  };


  // *** Ajouter un nouveau produit ***
  const handleAdd = () => {
    const newProduct = {
      id: Date.now(),
      code: newProductCode,
      name: newProductName,
    };

    setProducts([newProduct, ...products]);
    setNewProductCode("");
    setNewProductName("");
  };



  // *** Gestion de l'édition d'une ligne ***
  const handleEdit = (productId) => {
    if (editingRows.includes(productId)) {
      // Désactiver le mode édition
      const newEditingRows = editingRows.filter(id => id !== productId);
      setEditingRows(newEditingRows);

      // Appliquer les valeurs éditées
      const updatedData = products.map(item => {
        if (item.id === productId && editedValues[productId]) {
          return { ...item, ...editedValues[productId] };
        }
        return item;
      });
      setProducts(updatedData);

      // Effacer les valeurs éditées
      const newEditedValues = { ...editedValues };
      delete newEditedValues[productId];
      setEditedValues(newEditedValues);
    } else {
      // Activer le mode édition
      setEditingRows([...editingRows, productId]);
    }
  };
  // Calcul des valeurs nécessaires pour la pagination
  const itemsPerPage = 5;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  // ***** Appel API *****
  // const fetchProducts = async () => {
  //   const data = await handleGet();
  //   if (data) {
  //     console.log('Produits récupérés avec succès :', data);
  //     setProducts(data);
  //   } else {
  //     console.log('Échec de la récupération des produits');
  //   }
  // };

  // const handleDeleteProduct = async (productId) => {
  //   const success = await handleDelete(productId);
  //   if (success) {
  //     console.log('Produit supprimé avec succès');
  //   } else {
  //     console.log('Échec de la suppression du produit');
  //   }
  // };

  // const handleCreate = async (newProductData) => {
  //   const success = await handlePost(newProductData);
  //   if (success) {
  //     console.log('Nouveau produit créé avec succès');
  //   } else {
  //     console.log('Échec de la création du produit');
  //   }
  // };

  // const handleEdit = async (productId, updatedData) => {
  //   const success = await handlePatch(productId, updatedData);
  //   if (success) {
  //     console.log('Produit mis à jour avec succès');
  //   } else {
  //     console.log('Échec de la mise à jour du produit');
  //   }
  // };


  return (
    <div>
      <div className={`h-14 mt-4 shadow-md flex items-center ${isDarkMode ? 'bg-slate-600' : 'bg-white'}`}>
        <button className="ml-4 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded" onClick={() => {
          console.log('Bouton Nouveau cliqué');
          handleAdd();
        }}>
          <FontAwesomeIcon icon={faPlus} className="mr-1" />
          Nouveau
        </button>
        <button className="ml-4 bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded " onClick={() => handleDelete(selectedProduct)}>
          <FontAwesomeIcon icon={faTrash} className="mr-1" />
          Supprimer
        </button>


      </div>
      <div className={`mt-4 overflow-x-auto ${isDarkMode ? 'bg-slate-400' : 'bg-slate-200'}`}>
        <div className="max-w-screen-lg mx-auto">
          <table className="w-full table-fixed">
            <thead>
              <tr className="border-b">
                <th className="w-1/12 border-r bg-white text-center p-2 text-sm">Sélectionner</th>
                <th className="w-1/4 border-r bg-white text-left p-2 text-sm">Code</th>
                <th className="w-1/4 border-r bg-white text-left p-2 text-sm">Nom</th>
                <th className="w-1/4 border-r bg-white last:text-left p-2 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="w-1/12 border-2 text-center h-16 p-2"><input type="checkbox" /></td>
                <td className="w-1/4 border-2 text-left text-sm p-2">
                  <input
                    type="text"
                    value={newProductCode}
                    onChange={(e) => setNewProductCode(e.target.value)}
                    placeholder="Nouveau code"
                  />
                </td>
                <td className="w-1/4 border-2 text-left text-sm p-2">
                  <input
                    type="text"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                    placeholder="Nouveau nom"
                  />
                </td>
                <td className="w-1/4 border-2 text-left text-sm p-2">
                  <button className="mr-4 text-blue-500 hover:text-blue-700">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="text-green-500 hover:text-green-700" onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </td>
              </tr>
              {products.slice(startIndex, endIndex).map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="w-1/12 border-2 text-center h-16 p-2"><input type="checkbox" /></td>
                  <td className="w-1/4 border-2 text-left text-sm p-2">
                    {editingRows.includes(item.id) ? (
                      <input
                        type="text"
                        value={editedValues[item.id]?.code || item.code}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          setEditedValues(prevValues => ({
                            ...prevValues,
                            [item.id]: { ...prevValues[item.id], code: newValue }
                          }));
                        }}
                      />
                    ) : (
                      item.code
                    )}
                  </td>
                  <td className="w-1/4 border-2 text-left text-sm p-2">
                    {editingRows.includes(item.id) ? (
                      <input
                        type="text"
                        value={editedValues[item.id]?.name || item.name}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          setEditedValues(prevValues => ({
                            ...prevValues,
                            [item.id]: { ...prevValues[item.id], name: newValue }
                          }));
                        }}
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td className="w-1/4 border-2 text-left text-sm p-2">
                    {editingRows.includes(item.id) ? (
                      <>
                        <button
                          className="mr-4 text-green-500 hover:text-green-700"
                          onClick={() => handleEdit(item.id)}
                        >
                          Save
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => {
                            handleEdit(item.id);
                            console.log('Selected Product ID:', item.id);
                            setSelectedProduct(item.id);
                            handleDelete(item.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="mr-4 text-blue-500 hover:text-blue-700"
                          onClick={() => handleEdit(item.id)}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => {
                            console.log('Selected Product ID:', item.id);
                            setSelectedProduct(item.id);
                            handleDelete(item.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </>
                    )}
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
