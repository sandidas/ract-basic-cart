import { getStoredCart } from "../utilities/localstorage";

export const productcsAndCartLoader = async () => {
  // get prodcuts data
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // getStoredCart
  const savedCart = getStoredCart();
  // get added product from card
    const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
      // console.log(id, quantity);


    }
  }

  return { products, initialCart };
};
