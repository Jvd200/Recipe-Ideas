import React from "react";

export default function SearchBar({ ingredient, setIngredient, onSearch }) {
  return (
    <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 mb-6">
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter an ingredient (e.g., chicken)"
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition duration-200 w-full sm:w-auto"
      >
        Search
      </button>
    </div>
  );
}
