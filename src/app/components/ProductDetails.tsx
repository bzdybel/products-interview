import React from "react";
import { ProductImage } from "./ProductImage";
import { ProductInformation } from "./ProductInformation";
import Modal from "react-modal";
import { ProductProperties } from "../models/models";

interface ProductDetailsProps {
  name: ProductProperties["name"];
  image: ProductProperties["image"];
  description: ProductProperties["description"];
  setIsPopupOpen: (value: boolean) => void;
  isPopupOpen: boolean;
}
export function ProductDetails({
  name,
  image,
  description,
  setIsPopupOpen,
  isPopupOpen,
}: ProductDetailsProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const closeModal = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <Modal
        isOpen={isPopupOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="product-container w-100 h-100">
          <button
            data-cy="button-close"
            onClick={closeModal}
            type="button"
            className="close-button"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <ProductImage
            image={image}
            isUnavailable={false}
            customClass={"product-image-wrapper-details"}
            disabledTop={true}
          />
          <div
            className={`product-information-wrapper d-flex flex-column h-25 `}
          >
            <ProductInformation
              name={name}
              description={description}
              customClass={"product-information-wrapper-details"}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
