import axios from "axios";
import { ProductObject, ProductsParamsActive } from "../app/models/models";
import qs from "qs";

const API_URL = process.env.REACT_APP_API_URL;

export const _internal_api = axios.create({
  baseURL: API_URL,
});
const constructUrl = (
  baseUrl: string,
  payload: {
    search: ProductsParamsActive["searchValue"];
    limit: ProductsParamsActive["itemsPerPage"];
    page: ProductsParamsActive["currentPage"];
    promo: ProductsParamsActive["isPromo"];
    active: ProductsParamsActive["isActive"];
  }
) => {
  return baseUrl + qs.stringify(payload, { addQueryPrefix: true });
};

export const fetchGetProducts = async (payload: ProductsParamsActive) => {
  return _internal_api
    .get<ProductObject>(
      constructUrl("product", {
        search: payload.searchValue,
        limit: payload.itemsPerPage,
        page: payload.currentPage,
        promo: payload.isPromo,
        active: payload.isActive,
      })
    )
    .then((response) => response.data);
};
