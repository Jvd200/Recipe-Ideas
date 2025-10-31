export function applyLocalFilters(meals, filters) {
  return meals.filter((meal) => {
    const { time, mood } = filters;

    const matchesTime =
      time === "All" ||
      (time === "Quick" && meal.idMeal % 3 === 0) ||
      (time === "Medium" && meal.idMeal % 3 === 1) ||
      (time === "Long" && meal.idMeal % 3 === 2);

    const matchesMood =
      mood === "All" ||
      (mood === "Comfort" && meal.strMeal.toLowerCase().includes("chicken")) ||
      (mood === "Healthy" && meal.strMeal.toLowerCase().includes("salad")) ||
      (mood === "Experimental" && meal.strMeal.toLowerCase().includes("curry"));

    return matchesTime && matchesMood;
  });
}
