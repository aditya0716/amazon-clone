import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <FlipMove>
      <div key={id} className="checkoutproduct">
        <img src={image} className="checkoutproduct__image" />
        <div className="checkoutproduct__info">
          <p className="checkoutproduct__title">{title}</p>
          <p className="checkoutproduct__price">
            <small>{"\u20B9"}</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutproduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button style={{ marginBottom: 20 }} onClick={removeFromBasket}>
            Remove from Basket
          </button>
        </div>
      </div>
    </FlipMove>
  );
}

export default CheckoutProduct;
