import React from "react";

export const ProductsEmpty: React.FC = () => {
  return (
    <div className="main-container">
      <div className="product-container-empty container container-fluid h-75 ">
        <div className="empty-content-wrapper d-flex align-items-end h-75">
          <div className="d-flex flex-column w-100">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-bag bag-empty w-100 mb-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"
              />
            </svg>
            <h1 className="empty-label w-100 d-flex justify-content-center">
              Ooops... It's empty here
            </h1>
            <p className="empty-paragraph w-100 d-flex justify-content-center">
              There are no products on the list
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
