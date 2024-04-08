import { getCartPrductFromLS } from "./getCardProducts";

export const udpateCartProductTotal = () =>{

    let productSubTotal = document.querySelector(".productSubTotal")
    let productFinalTotal = document.querySelector(".productFinalTotal")
    
    let localCartProducts = getCartPrductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum,currElem) => {
        let productPrice = parseInt(currElem.price) || 0
        return accum + productPrice
    },initialValue)
    // console.log(totalProductPrice)
    productSubTotal.textContent =  `₹${totalProductPrice}`

    productFinalTotal.textContent = `₹${totalProductPrice}`
}
udpateCartProductTotal()
