import React from "react";
import { Link } from "react-router-dom";
import { deleteStoredAllCartItems } from "../../utilities/localstorage";

const Cart = ({ cart, deleteAllCartItems }) => {
  //   console.log(cart);
  // ERROR it's comes empty array while card not call
  // 49.3 Same as teacher

  let total = 0;
  let shipping = 0;
  let totalProducts = 0;
  let totalQuantity = 0; // total number of product quantity in cart
  for (const product of cart) {
    totalQuantity = totalQuantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    totalProducts = totalProducts + 1;
  }
  // show only 2 decimal
  const tax = (total * 0.1).toFixed(2); // toFixed convert to text
  const grandTotal = total + shipping + parseFloat(tax);
  return (
    <div className="sticky top-40">
      <div className="card bg-slate-900 shadow-xl">
        <div className="card-body text-left">
          <h2 className="card-title">Order Summery</h2>
          <p>Selected Item: {totalProducts}</p>
          <p>Selected Quantity: {totalQuantity}</p>
          <p>Total Price: ${total} </p>
          <p>Total Shipping: ${shipping} </p>
          <p>Tax: ${tax} </p>
          <p>
            <b>Grand Total: {grandTotal.toFixed(2)} </b>
          </p>
          <div className="card-actions justify-end">
            <button onClick={deleteAllCartItems} className="btn btn-secondary btn-block mt-5">
              Clear Cart
            </button>
            <Link className="btn btn-outline btn-block mt-5" to="../orders">
              {" "}
              Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
