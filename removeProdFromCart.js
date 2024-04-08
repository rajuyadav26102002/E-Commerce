import { getCartPrductFromLS } from "./getCardProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartPrductFromLS();

    cartProducts = cartProducts.filter((curProd) => curProd.id !== id)


    //update the local stoage after removiing the item

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts))

    //remove div onClick

    let removeDiv = document.getElementById(`card${id}`)
    if(removeDiv){
        removeDiv.remove();

        //show toast(popup)when prodcut is added

        showToast("delete" ,id)
    }
    updateCartValue(cartProducts);
}