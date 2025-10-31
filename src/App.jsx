import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import ResultsGrid from "./components/ResultsGrid";
import Loader from "./components/Loader";
import ErrorBanner from "./components/ErrorBanner";
import { fetchMealsByIngredient } from "./utils/api";
import { applyLocalFilters } from "./utils/filters";

export default function App() {
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const [filters, setFilters] = useState({
    time: "All",
    mood: "All",
  });

  const handleSearch = async () => {
    if (!ingredient) {
      setError("Please enter an ingredient.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const data = await fetchMealsByIngredient(ingredient);
      if (data.meals) setMeals(data.meals);
      else setError("No meals found for that ingredient.");
    } catch {
      setError("Error fetching recipes. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Apply local filters
  const filteredMeals = applyLocalFilters(meals, filters);

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        🍳 Taylor’s Recipe Finder
      </h1>

      <SearchBar
        ingredient={ingredient}
        setIngredient={setIngredient}
        onSearch={handleSearch}
      />

      <FilterBar filters={filters} setFilters={setFilters} />

      {loading && <Loader />}
      {error && <ErrorBanner message={error} />}

      <ResultsGrid meals={filteredMeals} />
    </div>
  );
}
