import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const ProductContainer = document.querySelector('#productContainer')
const productTemplate = document.querySelector("#productTemplate")


export const showProductContainer = (products) => {
    if (!products) {
        return false;
    }


    products.forEach((currProd) => {
        const { id, name, category, brand, image, price, stock, description } = currProd

        const productClone = document.importNode(productTemplate.content, true)


        productClone.querySelector("#cardValue").setAttribute("id" , `card${id}`);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${price * 2}`;


        //for prioduct inc or dec

        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock)
        })

        //add to cart

        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event)=>{
            addToCart(event , id , stock)
        })


        ProductContainer.append(productClone)
    })
};


