import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = () => {
    onSearch(searchLocation);
  };

  return (
    <div className="p-4 bg-white border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Search for Jobs</h2>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter location (e.g., Bengaluru)"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-400 text-white py-2 px-4 rounded-md bg-gradient-to-r from-blue-400 to-purple-400

          transition duration-200"
        >
          Search Job
        </button>
      </div>
    </div>
  );
}
