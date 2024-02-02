import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './SearchBar.css'

const SearchBar = () => {
  const navigate = useNavigate();
  const [querySearch, setQuerySearch] = useState();
  const url = "http://localhost:3000/carros" + querySearch;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q=" +querySearch);
  };

  return (
    <div className="searchBarContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setQuerySearch(e.target.value)}
          placeholder="Pesquisar"
          className="BarSearch"
        />
        <input type="submit" className="submit" value="Pesquisar"/>
      </form>
    </div>
  );
};

export default SearchBar;
