import React, {useState, useEffect} from 'react';
import './common.css';
import CommonTable from './CommonTable';
import ChangeInterval from './ChangeInterval';
import { getData } from '../util';
import { CommonLineChart } from './CommonChart';

const Pressure = () => {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData("pressure", 24)
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
            <p className="title">PRESSURE</p>
            <div className="content-inner">
                {loaded ? 
                    <>
                        <CommonTable data={data} accessor="pressure" />
                        <ChangeInterval changeInterval={(val) => getData("pressure", val).then(res => setData(res)).catch(e => console.log(e))}/>
                        <CommonLineChart data={data.map(item => {return item.pressure})} labels={data.map(item => {return item.date_time})} title="Pressure"/>
                    </>
                : <></>}
            </div>
        </div>
    );
};

export default Pressure;