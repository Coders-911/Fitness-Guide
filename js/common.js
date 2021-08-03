function saveCart() {
    localStorage.setItem("Cart", JSON.stringify(cart));
}
function loadCart() {
    if (localStorage.getItem('Cart') != null) {
        return JSON.parse(localStorage.getItem('Cart'));
    }
    return [];
}