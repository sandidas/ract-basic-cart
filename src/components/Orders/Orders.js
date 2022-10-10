import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { cartRemoveItemFromLocalStorage, deleteStoredAllCartItems } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";
import ReviewCart from "../ReviewCart/ReviewCart";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter(product =>product.id !== id );
    setCart(remaining);
    cartRemoveItemFromLocalStorage(id);
   

 }
 const clearCart = () => {
    deleteStoredAllCartItems();
    setCart([]);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          {cart.map((product) => (
            <ReviewCart handleRemoveItem={handleRemoveItem} key={product.id} product={product}></ReviewCart>
          ))}
        </div>
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
