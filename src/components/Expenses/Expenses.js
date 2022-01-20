import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {
    const expenseData = props.data;

    const [filteredYear, setFilteredYear] = useState('2020'); 

    const onChangeFilterHandler = (changedYear) => {
        setFilteredYear(changedYear);
    }
    
    return (
        <Card className="expenses">
        <ExpenseFilter selectedYear={filteredYear} onChangeFilter={onChangeFilterHandler} />
            <ExpenseItem 
                title={expenseData[0].title} 
                amount={expenseData[0].amount} 
                date={expenseData[0].date} 
            />
            <ExpenseItem 
                title={expenseData[1].title} 
                amount={expenseData[1].amount} 
                date={expenseData[1].date} 
            />
            <ExpenseItem 
                title={expenseData[2].title} 
                amount={expenseData[2].amount} 
                date={expenseData[2].date} 
            />
        </Card>
    );
}

export default Expenses;