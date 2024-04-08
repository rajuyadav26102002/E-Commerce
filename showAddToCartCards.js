import  products  from './api/products.json'
import { fetchQuantityCartfromLS } from './fetchQuantityCartfromLS';
import { getCartPrductFromLS } from "./getCardProducts";
import { incrementDecrement } from './incrementDecrement';

import { removeProdFromCart } from './removeProdFromCart';
import { udpateCartProductTotal } from './udpateCartProductTotal';

let cartProducts = getCartPrductFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) =>
        curElem.id === curProd.id)
})
// console.log(filterProducts)

//to update add to cart page

const cartElement = document.querySelector("#productCartContainer");

const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {

        const { category, id, image, name, stock, price } = curProd;

        let productClone = document.importNode(templateContainer.content, true)

        const lsActualData = fetchQuantityCartfromLS(id , price)
 
        productClone.querySelector("#cardValue").setAttribute("id" , `card${id}`);

        productClone.querySelector(".category").textContent = category; 
        
        productClone.querySelector(".productName").textContent = name;
        
        productClone.querySelector(".productImage").src = image;

        productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
       
        productClone.querySelector(".productPrice").textContent = lsActualData.price;

        //hanndle increament or dcrea,mnet

        productClone.querySelector(".stockElement")
        .addEventListener("click" , (event) => {
            incrementDecrement(event , id , stock ,price)
        })

        
        productClone.querySelector(".remove-to-cart-button").addEventListener("click",() => removeProdFromCart(id)

        )
        
        cartElement.appendChild(productClone)

    })
}
//showing the card products
showCartProduct();

//total sum of all products


udpateCartProductTotal();