import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import {useContext} from "react";
import cartContext from "../../store/cart-context";

const Cart = props => {
    const cartCTX = useContext(cartContext);
    const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
    const hasItems = cartCTX.items.length > 0;

    const cartItems =
        <ul className={classes['cart-items']}>
        {cartCTX.map((item) =>
            <li>{item.name}</li>)}
        </ul>;

    return <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;