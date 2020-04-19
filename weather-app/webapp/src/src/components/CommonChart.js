import React from 'react';
import { Bar } from 'react-chartjs-2';
import './common.css';

export const CommonBarChart = ({labels, data, title}) => {
    return(
        <div className="chart-container">
            <Bar
                data={{
                    labels: labels,
                    datasets: [{
                        label: title,
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: data
                    }]
            
                }}
            />
        </div>
    );
};