import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) => {

    if(props.items.length === 0){
        return <h3 className="expenses-list__fallback">No Expenses Found...!</h3>;
    }
    return(
        <ul className="expenses-list">
            {
                props.items.map( (expenseItem) =>{
                    return  <ExpenseItem 
                    key={Math.random()} 
                    title={expenseItem.title} 
                    amount={expenseItem.amount} 
                    date={expenseItem.date} 
                    />
                })
            }
        </ul>
    )
}
export default ExpensesList;