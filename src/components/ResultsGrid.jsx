import React from "react";
import MealCard from "./MealCard";

export default function ResultsGrid({ meals }) {
  if (!meals.length)
    return (
      <p className="text-gray-500 text-center">
        Enter an ingredient to see recipes.
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
