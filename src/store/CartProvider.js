import cartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    amount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItem) {
           const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.item + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }


        const updatedTotalAmount = state.totalAmount + action.item.price + action.item.amount;
        return {
            items: updatedItems,
            amount: updatedTotalAmount
        };
    }
    if(action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex();

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