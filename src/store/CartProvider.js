import cartContext from "./cart-context";

const CartProvider = props => {
    const addItemHandler = item => {};
    const removeItemFromCartHandler = id => {};
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemFromCartHandler
    }

    return <cartContext.Provider value={cartContext}>
        {props.children}
    </cartContext.Provider>
}

export default CartProvider;