import React from "react";
import { withTranslation } from "react-i18next";
import { Modal, Rating, Button } from "semantic-ui-react";

const ProductModal = ({ selectedProduct, setSelectedProduct, t }) => {
  return (
    <Modal
      onClose={() => setSelectedProduct(null)}
      closeIcon
      open={selectedProduct !== null}
    >
      <Modal.Content className="container-modal">
        {selectedProduct && (
          <>
            <div className="container-image">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="image"
              />
            </div>
            <div className="text">
              <h4 className="title">{selectedProduct.title}</h4>
              <div className="rating">
                <Rating
                  icon="star"
                  defaultRating={selectedProduct.rating.rate}
                  maxRating={5}
                  disabled
                />
                <p className="count-rating">{selectedProduct.rating.rate}</p>
              </div>
              <p className="length">
                {selectedProduct.rating.count} {t("avalicações")}
              </p>
              <span className="price">
                {t("R$")} {selectedProduct.price}
              </span>
              <div className="container-description">
                <span className="description">
                  {selectedProduct.description}
                </span>
              </div>
              <br />
              <span className="category">{selectedProduct.category}</span>
              <Button
                primary
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#2b32dc",
                  width: "50%",
                  marginTop: "35px",
                  fontSize: "0.875rem",
                }}
              >
                {t("Comprar agora")}
              </Button>
            </div>
          </>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default withTranslation()(ProductModal);
