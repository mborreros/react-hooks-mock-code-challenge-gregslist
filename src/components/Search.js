import { React, useState } from "react";

function Search({ handleSearch }) {

  const [searchInput, setSearchInput] = useState("")

  function handleTyping(event) {
    setSearchInput(event.target.value)
  };

  function handleSubmit(event) {
    event.preventDefault()
    handleSearch(searchInput)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(event) => handleTyping(event)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
