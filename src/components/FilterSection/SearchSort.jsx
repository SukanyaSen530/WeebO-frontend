import React from "react";
import { v4 as uuid } from "uuid";

import { IoSearchCircle } from "react-icons/io5";
import "./search-sort.scss";

const sortData = [
  { id: uuid(), sortType: "HIGH_TO_LOW", name: "Price - High to Low" },
  { id: uuid(), sortType: "LOW_TO_HIGH", name: "Price - Low to High" },
  { id: uuid(), sortType: "LOW_TO_HIGH", name: "Rating - High to Low" },
  { id: uuid(), sortType: "HIGH_TO_LOW", name: "Rating - Low to High" },
];

const SearchSort = () => {
  return (
    <section>
      <div className="search-container">
        <IoSearchCircle className="search-container__icon" />
        <input
          type="text"
          placeholder="Search by name"
          className="search-container__input"
        />
      </div>

      <select className="sort-dropdown">
        <option value=""> Select </option>
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
