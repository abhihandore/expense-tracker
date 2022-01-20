import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const onSaveFormDataHandler = (formData) => {
        props.onAddExpenseData(formData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm  onSaveFormData={onSaveFormDataHandler} />
        </div>
    );
}

export default NewExpense;