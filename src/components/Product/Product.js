import React from "react";

const Product = ({ product, addToCartSingleItem }) => {
  const { name, img, seller, price, ratings } = product;

  return (
    <div>
      <div className="card bg-base-100 shadow-lg shadow-cyan-500/50 border">
        <figure>
          <img src={img} className="max-h-200" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {name} </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end flex items-center">
            <strong>${price}</strong>
            <button onClick={() => addToCartSingleItem(product)} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
