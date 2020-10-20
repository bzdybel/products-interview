import React from "react";
import { ProductsParamsActive } from "../models/models";
interface SearchFiltersProps {
  onActiveClick: (isActive: boolean) => void;
  onPromoClick: (isPromo: boolean) => void;
  isPromo: ProductsParamsActive["isPromo"] | null;
  isActive: ProductsParamsActive["isActive"] | null;
}

export function SearchFilters({
  onActiveClick,
  onPromoClick,
  isActive,
  isPromo,
}: SearchFiltersProps) {
  return (
    <div className="col-6 form-check checkboxes-wrapper  d-flex  justify-content-between ">
      <div className="min-width custom-control custom-checkbox checkbox-xl w-50">
        <input
          type="checkbox"
          className="custom-control-input"
          data-cy="active_checkbox"
          id="active"
          checked={!!isActive}
          onChange={(event) => onActiveClick(event.target.checked)}
        />
        <label className="custom-control-label" htmlFor="active">
          Active
        </label>
      </div>
      <div className="min-width custom-control custom-checkbox checkbox-xl w-50">
        <input
          type="checkbox"
          data-cy="promo_checkbox"
          className="custom-control-input"
          id="promo"
          checked={!!isPromo}
          onChange={(event) => onPromoClick(event.target.checked)}
        />
        <label className="custom-control-label" htmlFor="promo">
          Promo
        </label>
      </div>
    </div>
  );
}
