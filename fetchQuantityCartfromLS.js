import { getCartPrductFromLS } from "./getCardProducts";

export const fetchQuantityCartfromLS = (id , price) =>{
    let cartProducts = getCartPrductFromLS();

    let existingProduct = cartProducts.find((curProd) => curProd.id === id)

    let quantity = 1;

    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return {quantity , price}
}