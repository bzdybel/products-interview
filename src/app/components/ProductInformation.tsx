import React from "react";
import { ProductProperties } from "../models/models";

const MAX_VISIBLE_TEXT = 170;

interface ProductInformationProps {
  name: ProductProperties["name"];
  description: ProductProperties["description"];
  customClass?: string;
}

export function ProductInformation({
  name,
  description,
  customClass,
}: ProductInformationProps) {
  const calculateDispalyDescription = (description: string) => {
    if (description.length > MAX_VISIBLE_TEXT) {
      return `${description.substr(0, MAX_VISIBLE_TEXT).trim()}...`;
    }
    return description;
  };
  return (
    <>
      <div
        className={`product-information-wrapper h-50 ${customClass}  d-flex flex-column justify-content-center align-items-center `}
      >
        <p className="product-title d-flex justify-content-start align-items-center h-25">
          {name}
        </p>
        <p className="product-description d-flex justify-content-start align-items-start h-75 mb-0">
          {calculateDispalyDescription(description)}
        </p>
      </div>
    </>
  );
}
