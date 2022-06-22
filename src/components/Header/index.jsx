import React from "react";
import { SearchBar } from "../SearchBar";

export const Header = ({ onSubmitQuery }) => (
  <header className="App-header">
    <p className="App-nav-tittle">CINEMA</p>
    <div>
      <h1 className="App-nav-search-container-big-tittle">
        Your favorite movies. Explained
      </h1>
      <h4 className="App-nav-search-container-small-tittle">
        Figure out what happened. Then find out why.
      </h4>
      <SearchBar onSubmitQuery={onSubmitQuery} />
    </div>
  </header>
);
