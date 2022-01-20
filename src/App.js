import React, { useState } from "react";
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {

  // let expenseData = [
  //   {id: 'ed1', title: 'Car Insurance', amount: 435.34, date: new Date(2019,11,1)},
  //   {id: 'ed2', title: 'Policy Created', amount: 135.34, date: new Date(2021,2,1)},
  //   {id: 'ed3', title: 'Home Loan', amount: 415.34, date: new Date(2020,11,4)}, // tailing or hanging comma
  // ];
  const [expenseData, setExpenseData] = useState([
    {id: 'ed1', title: 'Car Insurance', amount: 435.34, date: new Date(2019,11,1)},
    {id: 'ed2', title: 'Policy Created', amount: 135.34, date: new Date(2021,2,1)},
    {id: 'ed3', title: 'Home Loan', amount: 415.34, date: new Date(2020,11,4)}
  ]);

  const onAddExpenseDataHandler = (expense) => {
    setExpenseData([...expenseData,{
      id: expense.id,
      title: expense.enteredTitle,
      amount: expense.enteredAmount,
      date: new Date(expense.enteredDate),
    }])
    // setExpenseData( (prevState) => {
    //   return [...prevState, {
    //     id: expense.id,
    //     title: expense.enteredTitle,
    //     amount: expense.enteredAmount,
    //     date: new Date(expense.enteredDate),
    //   }];
    // } )
    console.log(expenseData);
  }

  return (
    <div className="App">
      <h2>Let's start App</h2>
      <NewExpense onAddExpenseData={onAddExpenseDataHandler} />
      <Expenses data={expenseData} />
      
    </div>
  );

  /** 
   * * If JSX is not used in the React Project. 
   * * Under the hood, the JSX code will transform to the code below.
  return React.createElement(
    'div',
    {},
    React.createElement('h2',{},'Let\'s start App'),
    React.createElement(Expenses,{data: expenseData}),
  );
  */
}

export default App;
