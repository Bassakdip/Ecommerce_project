import React, { useContext,useRef } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../Context/CartContext";
import "./CartItem.css";

function CartItem(props) {
  let placeholder = 0;
  const amount = useRef("");
  const ctx = useContext(CartContext);

  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };
  placeholder = placeholder + props.amount;

  return (
    <tr className="items">
      <td className="image-title">
        <span id="img">
          <img src={props.image} alt={props.title} />
        </span>
        <span className="title">{props.title}</span>
      </td>
      <td className="tdprice">
        <div className="priceValue">${props.price}</div>
      </td>
      <td>
        <div className="quan-rem">
          <span className="quantity">
            <input type="text" min={1} placeholder={placeholder} ref={amount} />
          </span>
          <span className="rem">
            <Button
              onClick={() => {
                removeItemHandler(props.id);
              }}
              style={{ fontSize: "12px" }}
            >
              Remove
            </Button>
          </span>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;