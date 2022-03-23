import React from "react";
import { v4 as uuid } from "uuid";

import { useProductContext, filterActions } from "../../context";

import { FiSearch } from "react-icons/fi";
import "./search-sort.scss";

const sortData = [
  { id: uuid(), sortType: "HIGH_TO_LOW|price", name: "Price - High to Low" },
  { id: uuid(), sortType: "LOW_TO_HIGH|price", name: "Price - Low to High" },
  { id: uuid(), sortType: "HIGH_TO_LOW|rating", name: "Rating - High to Low" },
  { id: uuid(), sortType: "LOW_TO_HIGH|rating", name: "Rating - Low to High" },
];

const SearchSort = () => {
  const { state, dispatch } = useProductContext();

  const {
    productsFilter: { sortOption, searchQuery },
  } = state;

  return (
    <section className="search-sort-container">
      <div className="search-container">
        <FiSearch className="search-container__icon" />
        <input
          type="search"
          placeholder="Search by product name (Ex: batman)"
          className="search-container__input"
          value={searchQuery}
          onChange={(e) =>
            dispatch({
              type: filterActions.FILTER_SEARCH,
              payload: e.target.value,
            })
          }
        />
      </div>

      <select
        className="sort-dropdown"
        value={sortOption}
        onChange={(e) =>
          dispatch({
            type: filterActions.SORT_OPTION,
            payload: e.target.value,
          })
        }
      >
        <option value=""> Sort Options </option>
        {sortData.map((data) => (
          <option key={data.id} value={data.sortType}>
            {data.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default SearchSort;
