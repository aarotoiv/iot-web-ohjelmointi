import React, { useState, useEffect } from 'react';
import './common.css';
import axios from 'axios';
import { getData } from '../util';

const LastTenTable = ({data}) => {
    return (
        <table className="last-ten-table">
            <tbody>
                <tr><th>Date</th><th>Time</th><th>Signal</th><th>Value</th></tr>
                {data.map(item => {
                    const date = new Date(item.date_time);
                    return (<tr key={item.id} >
                        <td>{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</td>
                        <td>{date.getHours()}.{date.getMinutes()}.{date.getSeconds()}</td>
                        <td>{Object.keys(item.data)[0]}</td>
                        <td>{Object.values(item.data)[0]}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    );
};

const LastValues = () => {
    const [lastTen, setLastTen] = useState([]);

    useEffect(() => {
        axios.get("https://webapi19sa-1.course.tamk.cloud/v1/weather/limit/10")
        .then(({data}) => {
            console.log(data);
            setLastTen(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div className="content">
            <p className="title">Last Values</p>
            <div className="content-inner">
                <LastTenTable data={lastTen} />
            </div>
        </div>
    );
};

export default LastValues;