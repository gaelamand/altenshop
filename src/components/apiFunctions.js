// apiFunctions.js

// Fonction pour effectuer une requête GET vers une API
export async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  // Fonction pour effectuer une requête POST vers une API
  export async function postData(url, payload) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  }
  
  // Fonction pour effectuer une requête DELETE vers une API
  export async function deleteData(url, id) {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  }
// Fonction pour effectuer une requête PATCH vers une API
export async function updateData(url, id, updatedData) {
    const response = await fetch(`${url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  }s  