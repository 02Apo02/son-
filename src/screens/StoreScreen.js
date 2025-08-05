import React from 'react';

function StoreScreen() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">🛒 Mağaza</h2>
      <button onClick={() => alert('Satın alındı!')} className="bg-green-600 px-4 py-2 rounded mt-4">
        1 TON ile Al
      </button>
    </div>
  );
}

export default StoreScreen;
