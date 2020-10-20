import React from "react";
import { Product } from "../components/Product";
import { ProductObject } from "../models/models";
import { ProductsEmpty } from "../components/ProductsEmpty";

import { v4 as uuidv4 } from "uuid";

interface ProductsContainerProps {
  listItems: ProductObject["items"];
}
export function ProductsContainer({ listItems }: ProductsContainerProps) {
  return (
    <div className="h-100">
      {listItems.length === 0 ? (
        <ProductsEmpty />
      ) : (
        <div key={uuidv4()} className="container-fluid products-container">
          {listItems.map((item) => {
            return (
              <Product
                item={{
                  id: item.id,
                  name: item.name,
                  description: item.description,
                  image: item.image,
                  rating: item.rating,
                  isUnavailable: !item.active,
                  isPromo: item.promo,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
