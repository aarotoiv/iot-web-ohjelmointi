import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import './common.css';

export const CommonBarChart = ({labels, data, title}) => {
    return(
        <div className="chart-container">
            <Bar
                data={{
                    labels: labels,
                    datasets: [{
                        backgroundColor: '#212121',
                        label: title,
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: data
                    }]
            
                }}
                options={{
                    scales: {
                        xAxes: [{
                            ticks: {
                                display: false 
                            }
                        }]
                    }
                }}
            />
        </div>
    );
};

export const CommonLineChart = ({labels, data, title}) => {
    return (
        <div className="chart-container">
            <Line
                data={{
                    labels: labels,
                    datasets: [{
                        backgroundColor: '#212121',
                        label: title,
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: data
                    }]
                }}
                options={{
                    scales: {
                        xAxes: [{
                            ticks: {
                                display: false 
                            }
                        }]
                    }
                }}
            />
        </div>
    )
};

export const SpeedoMeter = ({labels, data, title}) => {
    return (
        <div className="chart-container">
            <Doughnut 
                data={{
                    labels: labels,
                    datasets: [{
                        backgroundColor: '#212121',
                        label: title,
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: data
                    }]
                }}
                options={{
                    scales: {
                        xAxes: [{
                            ticks: {
                                display: false 
                            }
                        }]
                    },
                    rotation: -1.0 * Math.PI,
                    circumference: Math.PI
                }}
            />
        </div>
    );
};