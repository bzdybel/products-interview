export type ProductsParams = {
  itemsPerPage: number;
  currentPage: number;
};

export type ProductsParamsActive = {
    itemsPerPage: number;
    currentPage: number;
    isActive: boolean,
    isPromo: boolean,
    searchValue: string
  };

export type ProductObject = {
  items: Array<{
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;
  }>;

  itemCount: number,
  totalItems: number,
  pageCount: number,
  next: string,
  previous: string
};

export type ProductProperties = {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: number;
  isPromo: boolean;
  isUnavailable: boolean;
}
