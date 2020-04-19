import React from 'react';

const CommonTable = ({data, accessor}) => {
    return (
        <table>
            <tbody>
                <tr><th>Date</th><th>Time</th><th>Value</th></tr>
                {data.map(item => {
                    const date = new Date(item.date_time);
                    return(<tr key={item.date_time}>
                        <td>{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</td>
                        <td>{date.getHours()}.{date.getMinutes()}.{date.getSeconds()}</td>
                        <td>{item[accessor]}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    );
};

export default CommonTable;