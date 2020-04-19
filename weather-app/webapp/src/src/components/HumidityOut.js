import React, {useState, useEffect} from 'react';
import './common.css';
import CommonTable from './CommonTable';
import ChangeInterval from './ChangeInterval';
import { getData } from '../util';
import { CommonLineChart } from './CommonChart';

const HumidityOut = () => {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData("humidity_out", 24)
        .then(data => {
            setData(data);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    return (
        <div className="content">
            <p className="title">HUMIDITY OUT</p>
            <div className="content-inner">
                {loaded ? 
                    <>
                        <CommonTable data={data} accessor="humidity_out" />
                        <ChangeInterval changeInterval={(val) => getData("humidity_out", val).then(res => setData(res)).catch(e => console.log(e))}/>
                        <CommonLineChart data={data.map(item => {return item.humidity_out})} labels={data.map(item => {return item.date_time})} title="Humidity Out"/>
                    </>
                : <></>}
            </div>
        </div>
    );
};

export default HumidityOut;