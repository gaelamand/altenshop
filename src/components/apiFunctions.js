// apiFunctions.js

// Fonction pour effectuer une requête GET pour récupérer les produits
export const handleGet = async () => {
  try {
    const response = await fetch('https://nom-de-lapi/products', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      return data; // Renvoie les données si la requête réussit
    } else {
      console.error('Erreur lors de la récupération des produits');
      return null; // Renvoie null en cas d'échec de la requête
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des produits :', error);
    return null; // Renvoie null en cas d'erreur
  }
};

// Fonction pour effectuer une requête DELETE pour supprimer un produit
export const handleDelete = async (productId) => {
  try {
    const response = await fetch(`https://nom-de-lapi/products/${productId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      return true;
    } else {
      console.error('Erreur lors de la suppression du produit');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de la suppression du produit :', error);
    return false;
  }
};

// Fonction pour effectuer une requête PATCH pour mettre à jour un produit
export const handlePatch = async (productId, updatedData) => {
  try {
    const response = await fetch(`https://nom-de-lapi/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (response.ok) {
      return true;
    } else {
      console.error('Erreur lors de la mise à jour du produit');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour du produit :', error);
    return false;
  }
};

// Fonction pour effectuer une requête POST pour créer un nouveau produit
export const handlePost = async (newProductData) => {
  try {
    const response = await fetch('https://nom-de-lapi/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProductData),
    });

    if (response.ok) {
      return true;
    } else {
      console.error('Erreur lors de la création du produit');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de la création du produit :', error);
    return false;
  }
};

