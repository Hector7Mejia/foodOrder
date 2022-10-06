import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
import {useRef, useState} from "react";

const MealItemForm = props => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim === 0 ||
            enteredAmount < 0 ||
            enteredAmount > 5) {
            setAmountIsValid(false);

        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" input={{
                ref: {amountInputRef},
                id: 'amount_' + props.id,
                amount: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }
            }/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
        </form>)
}

export default MealItemForm;