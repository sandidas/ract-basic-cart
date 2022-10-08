import { getStoredCart } from "../utilities/localstorage";

export const productcsAndCartLoader = async () => {
// get prodcuts data
const productsData = await fetch('products.json');
const products = await productsData.json();

// getStoredCart
const savedCart = getStoredCart();
// get added product from card
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        console.log('addedProduct',addedProduct);
    }


console.log(products);

console.log('saved Cart',savedCart);
return products;

}