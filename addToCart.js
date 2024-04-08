import { getCartPrductFromLS } from "./getCardProducts"
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartPrductFromLS()

export const addToCart = (event, id, stock) => {
   let arrLocalStorageProduct = getCartPrductFromLS();

   const currentProdElem = document.querySelector(`#card${id}`)
   let quantity = currentProdElem.querySelector(".productQuantity").innerText
   let price = currentProdElem.querySelector(".productPrice").innerText
   console.log(quantity, price)
   price = price.replace("₹", "")

   let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

   //for upadte over local storage valiuue of key update- price , value if already existing
   if (existingProd && quantity > 1) {
      quantity = Number(existingProd.quantity) + Number(quantity)
      price = Number(price * quantity);
      let updatedCart = {id , quantity ,price}

      updatedCart = arrLocalStorageProduct.map((curProd)=>{
         return curProd.id === id ? updatedCart : curProd;
      })
      console.log(updatedCart)
      localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))

         //showb toast when producta ddded to the cart
      showToast("add" ,id)

   }

   // esko esliye likhe bcz jo chiz add tha usko fir se add krke uski value update kar  de rha hai addd to cart me to yha hum usko bachne ke liye ye likh hai
   if (existingProd) {
      // alert("its duplcate")
      return false;
   }

   price = Number(price * quantity);
   quantity = Number(quantity);

   arrLocalStorageProduct.push({ id, quantity, price })
   localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct))

        

   //update the cart button value
   updateCartValue(arrLocalStorageProduct)

   //showb toast when producta ddded to the cart
   showToast("add" ,id)


}