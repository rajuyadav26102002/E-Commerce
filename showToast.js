export function showToast(operation, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    //set the text contenet of the based ont he operation

    if (operation === "add") {
        toast.textContent = `Product with ID ${id}  has been Added.`;
    }
    else {
        toast.textContent = `Product with ID ${id}  has been Deleted.`;
    }

    document.body.appendChild(toast)

    //automatically remove the toast from after 1 sec

    setTimeout(() => {
        toast.remove();

    }, 2000)
}