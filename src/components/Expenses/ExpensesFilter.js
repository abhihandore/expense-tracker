import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const onDropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label className="expenses-filter__label">Year</label>
                <select className="expenses-filter__select" onChange={onDropdownChangeHandler} >
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;