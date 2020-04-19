import React from 'react';

const ChangeInterval = ({changeInterval}) => {
    return (
        <select onChange={(evt) => changeInterval(evt.target.value)}>
            <option value="24">24 Hours</option>
            <option value="48">48 Hours</option>
            <option value="72">72 Hours</option>
            <option value="168">1 Week</option>
            <option value="672">1 Month</option>
        </select>
    )
};

export default ChangeInterval;