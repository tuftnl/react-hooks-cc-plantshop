import React, {useState} from "react";

function Search({handleFilter}) {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    const searchInput = e.target.value
    setSearch(...searchInput)
    console.log("Searching...")
    console.log(searchInput)
    handleFilter(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
