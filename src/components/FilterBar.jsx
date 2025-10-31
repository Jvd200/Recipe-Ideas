import React from "react";

export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {/* Cooking Time */}
      <select
        value={filters.time}
        onChange={(e) => setFilters((f) => ({ ...f, time: e.target.value }))}
        className="px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-400"
      >
        <option value="All">All Times</option>
        <option value="Quick">Quick</option>
        <option value="Medium">Medium</option>
        <option value="Long">Long</option>
      </select>

      {/* filter Mood */}
      <select
        value={filters.mood}
        onChange={(e) => setFilters((f) => ({ ...f, mood: e.target.value }))}
        className="px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-400"
      >
        <option value="All">All Moods</option>
        <option value="Comfort">Comfort</option>
        <option value="Healthy">Healthy</option>
        <option value="Experimental">Experimental</option>
      </select>
    </div>
  );
}
