import React, { useState } from 'react';

const GoogleSearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSearch} className="flex w-[50%] max-w-2xl items-center justify-center mt-10">
        <input
          type="text"
          className="px-4 py-2 flex-1 rounded-l-full bg-transparent focus:outline-none backdrop-blur-2xl border border-[#ffffff33] shadow-md"
          placeholder="Search Google"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="py-2 px-4 rounded-r-full backdrop-blur-[60px] border border-[#ffffff33] shadow-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GoogleSearchBar;
