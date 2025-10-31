import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500 border-opacity-75"></div>
      <span className="ml-3 text-blue-600 font-medium">Loading...</span>
    </div>
  );
}
