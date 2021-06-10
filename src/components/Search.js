import React from "react";

const Search = (props) => {
  const { handleSearchNameChange, handleSearchSubmit } = props;

  return (
    <div className="topnav">
      <a href="/">ESL</a>
      <div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            id="searchNameInput"
            onChange={handleSearchNameChange}
            placeholder="Search By Name"
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
};

export default Search;
