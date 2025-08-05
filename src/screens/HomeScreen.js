import React from 'react';

function HomeScreen() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">🚀 Pizza Tap Oyunu</h1>
      <button onClick={() => alert('Pizza tıklandı!')} className="bg-yellow-500 px-4 py-2 rounded mt-4">
        🍕 Pizza Yap!
      </button>
    </div>
  );
}

export default HomeScreen;
