import React, { useState } from "react";
import { Header } from "../components/Header";
import { ProductsParamsActive, ProductObject } from "../models/models";
import { useQuery } from "react-query";
import { fetchGetProducts } from "../../api/api";
import { ProductsContainer } from "../components/ProductsContainer";
import { Pagination } from "../components/Pagination";

const itemsPerPage = 12;

export const Products = () => {
  const [currentPage, setCurrentPage] = useState<
    ProductsParamsActive["currentPage"]
  >(1);
  const [isActive, setIsActive] = useState<
    ProductsParamsActive["isActive"] | null
  >(null);
  const [isPromo, setIsPromo] = useState<
    ProductsParamsActive["isPromo"] | null
  >(null);
  const [searchValue, setSearchValue] = useState<
    ProductsParamsActive["searchValue"]
  >("");

  const filtersActiveProductsRequestState = useQuery<
    ProductObject,
    ProductsParamsActive
  >({
    queryKey: [{ currentPage, itemsPerPage, isActive, isPromo, searchValue }],
    queryFn: fetchGetProducts,
    config: {
      onError: () => console.log("Error"),
    },
  });
  const products = filtersActiveProductsRequestState?.data as ProductObject;
  const onNextRequest = () => {
    currentPage < products.pageCount
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(products.pageCount);
  };
  const onPreviousRequest = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);
  };
  const onSpecificNumberClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const onActiveClick = (isActive: boolean): void => {
    console.log(isActive);
    isActive !== null && setIsActive(isActive);
  };
  const onPromoClick = (isPromo: boolean): void => {
    isPromo !== null && setIsPromo(isPromo);
  };
  const onSearch = (searchValue: string): void => {
    setSearchValue(searchValue);
  };
  return (
    <>
      {filtersActiveProductsRequestState.isLoading ? (
        <div className="d-flex h-100 w-100 align-items-center justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="h-100">
          <Header
            filters={{
              searchValue,
              isPromo,
              isActive,
            }}
            onActiveClick={onActiveClick}
            onPromoClick={onPromoClick}
            onSearch={onSearch}
            setSearchValue={setSearchValue}
          />
          <ProductsContainer listItems={products?.items} />
          {products?.totalItems > 0 && (
            <Pagination
              pageCount={products?.pageCount}
              onNextRequest={onNextRequest}
              onPreviousRequest={onPreviousRequest}
              onSpecificNumberClick={onSpecificNumberClick}
              currentPage={currentPage}
            />
          )}
        </div>
      )}
    </>
  );
};
