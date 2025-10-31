import React from "react";

export default function MealModal({ meal, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2 text-center">{meal.strMeal}</h2>
        <p className="text-gray-600 text-center">Meal ID: {meal.idMeal}</p>
      </div>
    </div>
  );
}
