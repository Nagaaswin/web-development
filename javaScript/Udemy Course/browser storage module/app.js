const strBtn = document.getElementById('store-btn');
const retriveBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('Storage(eDummy', 1);

dbRequest.onupgradeneeded = function (success) {
  const db = event.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productsStore.add({
      id: '1',
      title: 'A first Product',
      price: 28.0,
      tags: ['Expensive', 'Luxury'],
    });
  };
};

dbRequest.onerror = function (error) {
  console.log(error);
};

strBtn.addEventListener('click', () => {});

retriveBtn.addEventListener('click', () => {});
