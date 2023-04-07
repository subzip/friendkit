import React from "react";
import s from "../pages/Header/Header.module.scss";

const Search = () => {
  return (
    <div class={s.search}>
      <input type='text' placeholder='Search' />
    </div>
  );
};

export default Search;
