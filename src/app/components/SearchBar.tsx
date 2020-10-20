import React, { useState } from "react";
import { ProductsParamsActive } from "../models/models";

interface SearchBarProps {
  onSearch: (searchText: string) => void;
  searchValue: ProductsParamsActive["searchValue"];
}

export function SearchBar({ onSearch, searchValue }: SearchBarProps) {
  const [temporarySearchValue, setTemporarySearchValue] = useState<
    ProductsParamsActive["searchValue"]
  >(searchValue);

  return (
    <div className="col-8 search-bar-wrapper  d-flex justify-content-center align-self-center">
      <div className=" input-group">
        <input
          data-cy="search"
          type="text"
          className="border-right-0 form-control p-4 h-100"
          placeholder="Search"
          aria-describedby="basic-addon2"
          value={temporarySearchValue}
          onChange={(event) => setTemporarySearchValue(event.target.value)}
        />
        <div className="input-group-append ">
          <button
            className="search-button glyphicon glyphicon-search "
            type="button"
            onClick={() => onSearch(temporarySearchValue)}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-search mr-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
