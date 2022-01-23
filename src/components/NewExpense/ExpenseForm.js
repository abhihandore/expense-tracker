import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    /**
     * *One way of Handling the Multiple States
     */

    /*
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const enteredTitleHandler = event => {
        setEnteredTitle(event.target.value);
    }
    const enteredAmountHandler = event => {
        setEnteredAmount(event.target.value);
    }
    const enteredDateHandler = event => {
        setEnteredDate(event.target.value);
    }
    */


    /**
     * *Another way is - using the Object
     * ! Note : 
     * * When we are using the state which is dependent on the previous state, always follow Approach 2. 
     * * As it will always give the accurate value of previous state.
     * * calling a function in a setState. 
     */
    const [userInput, setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : '',
    });

    const enteredTitleHandler = event => {
        /**
         * ! Do not follow this approach as it will work as expected but in few cases, it will not give absolute/ correct previous state value.
         * ? [Approach 1]
         */
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        /**
         * ! when you are dependent on the previous state value, always use the approach given below .
         * ? [Approach 2]
         */
        setUserInput( (prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        } )
    }
    const enteredAmountHandler = event => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        setUserInput( (prevState) => {
            return {...prevState, enteredAmount: +event.target.value};
        } ) 
    }
    const enteredDateHandler = event => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        setUserInput( (prevState) => {
            return {...prevState, enteredDate: event.target.value};
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.onSaveFormData({
            ...userInput,
            id: Math.random().toString()
        });
        setUserInput({
            enteredTitle : '',
            enteredAmount : '',
            enteredDate : '',
        })
    }
    
    return (
        <form onSubmit={handleSubmit} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label className="label"  >Title</label>
                    <input 
                    type="text" 
                    onChange={enteredTitleHandler} 
                    value={userInput.enteredTitle} 
                    /* value={enteredTitle} */ 
                    />
                </div>
                <div className="new-expense__control">
                    <label className="label">Amount</label>
                    <input 
                    type="number" 
                    onChange={enteredAmountHandler} 
                    value={userInput.enteredAmount} 
                    /* value={enteredAmount} */ 
                    />
                </div>
                <div className="new-expense__control">
                    <label className="label">Date</label>
                    <input 
                    type="date" 
                    onChange={enteredDateHandler} 
                    value={userInput.enteredDate} 
                    /* value={enteredDate} */ 
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button className="btn btn-secondary" onClick={props.onCancel}>Cancel</button>
                <button className="btn btn-primary">Add Expense</button>
            </div>
        </form>
    );
} 

export default ExpenseForm;