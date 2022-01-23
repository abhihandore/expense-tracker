import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const allExpensesNumbers = props.dataPoints.map( (dataPoint) => dataPoint.value);
    const maxAmongAllExpenses = Math.max(...allExpensesNumbers);
    return (
        <div className="chart">
            {
                props.dataPoints.map( (point) => {
                    return <ChartBar 
                    value={point.value} 
                    label={point.label} 
                    maxValue={maxAmongAllExpenses} 
                    key={point.label} />
                })
            }
        </div>
    )
}

export default Chart;