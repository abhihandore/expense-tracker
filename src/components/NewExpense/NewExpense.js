import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [canStartEditing, setCanStartEditing] = useState(false);

    const onSaveFormDataHandler = (formData) => {
        props.onAddExpenseData(formData);
        setCanStartEditing(false);
    }

    const openAddExpenseContainerHandler = () => {
        setCanStartEditing(true);
    }
    const onCancelHandler = () => {
        setCanStartEditing(false);
    }
    return (
        <div className="new-expense">
            {
                !canStartEditing ?
                <button className="btn btn-add-expense" onClick={openAddExpenseContainerHandler}>Add New Expense</button> :
                <ExpenseForm  onSaveFormData={onSaveFormDataHandler} onCancel={onCancelHandler} />
            }
        </div>
    );
}

export default NewExpense;