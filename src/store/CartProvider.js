import cartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    amount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price + action.item.amount;
        return {
            items: updatedItems,
            amount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD',
            item: item});
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'ADD',
            id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <cartContext.Provider value={cartContext}>
        {props.children}
    </cartContext.Provider>
}

export default CartProvider;