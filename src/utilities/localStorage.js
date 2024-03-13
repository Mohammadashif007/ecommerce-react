const getLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        return JSON.parse(storedCart)
    }
    return [];
}


const saveToLocalStorage = cart => {
    // const savedCart = addToLocalStorage();
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const addToLocalStorage = id => {
    const cart = getLocalStorage();
    cart.push(id);
   saveToLocalStorage(cart)
}

export {addToLocalStorage, getLocalStorage}