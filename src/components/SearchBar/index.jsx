import React, { useCallback, useState } from "react";

export function SearchBar({onSubmitQuery}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange =(event) => {
    setSearchQuery(event.target.value);
  };

  const handleClick = useCallback(() =>{
    onSubmitQuery(searchQuery);
  }, [searchQuery,onSubmitQuery]);

  return (
    <div>
      <input
        className="App-nav-search-container-input"
        type="text"
        placeholder="Search for a movie"
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick}>Search</button>
    </div>
  );
}
