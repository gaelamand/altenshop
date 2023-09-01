// apiFunctions.js

export const handleDelete = async (productId) => {
  try {
    const response = await fetch(`./products/${productId}`, {
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