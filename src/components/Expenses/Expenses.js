import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020'); 

    const onChangeFilterHandler = (changedYear) => {
        setFilteredYear(changedYear);
    }
    const filteredDataOverYear = props.data.filter( (eachItem) => {
        return eachItem.date.getFullYear().toString() === filteredYear;
    });

    
    return (
        <Card className="expenses">
        <ExpenseFilter selectedYear={filteredYear} onChangeFilter={onChangeFilterHandler} />
        <ExpensesList items={filteredDataOverYear} />
        
        </Card>
    );
}

export default Expenses;