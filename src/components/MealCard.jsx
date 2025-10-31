import { useState } from "react";
import MealModal from "./MealModal";

export default function MealCard({ meal }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-200 hover:shadow-xl cursor-pointer"
      >
        <div
          key={meal.idMeal}
          className="bg-white rounded-lg p-3 flex flex-col items-center transition"
        >
          <div className="relative">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-32 h-32 object-cover rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          </div>

          <h2 className="text-center font-semibold text-gray-800 text-sm sm:text-base mt-2">
            {meal.strMeal}
          </h2>
        </div>
      </div>

      {showModal && (
        <MealModal meal={meal} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
