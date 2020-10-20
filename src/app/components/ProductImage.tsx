import React from "react";
import { ProductProperties } from "../models/models";

interface ProductImageProps {
  image: ProductProperties["image"];
  isUnavailable: ProductProperties["isUnavailable"];
  customClass?: string;
  isPromo?: ProductProperties["isPromo"];
  disabledTop?: boolean;
}

export function ProductImage({
  isUnavailable,
  image,
  customClass,
  isPromo,
  disabledTop,
}: ProductImageProps) {
  return (
    <>
      {isPromo ? (
        <div className={"top promo-label"}>Promo</div>
      ) : (
        <div className={`top ${disabledTop ? "height-0" : ""}`} />
      )}
      <img
        className={`product-image-wrapper ${customClass} img-fluid w-100 p-0 m-0 h-100  ${
          isUnavailable && "product-unavailable"
        }`}
        src={image}
        alt="Not available"
      />
    </>
  );
}
