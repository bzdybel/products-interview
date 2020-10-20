import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { SearchFilters } from "./SearchFilters";
import { Profile } from "./Profile";
import { ProductsParamsActive } from "../models/models";

interface HeaderProps {
  filters: {
    searchValue: string;
    isPromo: ProductsParamsActive["isPromo"] | null;
    isActive: ProductsParamsActive["isActive"] | null;
  };
  onActiveClick: (isActive: boolean) => void;
  onPromoClick: (isPromo: boolean) => void;
  onSearch: (searchText: string) => void;
  setSearchValue: (searchText: string) => void;
}

export function Header(params: HeaderProps) {
  const { onActiveClick, onPromoClick, onSearch, filters } = params;
  return (
    <>
      <div className="header-container container-fluid p-3">
        <h2 className="header col-2 heder-label d-flex justify-content-center align-self-center">
          <Link to="/" className="logo">
            join.ts.io
          </Link>
        </h2>
        <div className="search-with-filters col-4 d-flex  col-md-push-3">
          <SearchBar onSearch={onSearch} searchValue={filters.searchValue} />
          <SearchFilters
            onActiveClick={onActiveClick}
            onPromoClick={onPromoClick}
            isActive={filters.isActive}
            isPromo={filters.isPromo}
          />
        </div>
        <div className="profiles col-6 login-wrapper d-flex justify-content-end align-self-center col-md-push-9">
          <Profile isLogged={false} />
        </div>
      </div>
    </>
  );
}
