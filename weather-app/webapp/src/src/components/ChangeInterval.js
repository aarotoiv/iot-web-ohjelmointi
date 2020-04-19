import React from 'react';
import './common.css';

const ChangeInterval = ({setInterval, changeInterval}) => {
    return (
        <select className="change-interval" onChange={(evt) => {setInterval(evt.target.value); changeInterval(evt.target.value);}}>
            <option value="24">24 Hours</option>
            <option value="48">48 Hours</option>
            <option value="72">72 Hours</option>
            <option value="168">1 Week</option>
            <option value="672">1 Month</option>
        </select>
    )
};

export default ChangeInterval;