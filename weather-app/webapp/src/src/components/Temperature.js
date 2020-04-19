import React, {useState, useEffect} from 'react';
import './common.css';
import CommonTable from './CommonTable';
import ChangeInterval from './ChangeInterval';
import { getData } from '../util';
import { CommonBarChart } from './CommonChart';

const Temperature = () => {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData("temperature", 24)
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
            <p className="title">Temperature</p>
            <div className="content-inner">
                {loaded ? 
                    <>
                        <CommonTable data={data} accessor="temperature" />
                        <ChangeInterval changeInterval={(val) => getData("temperature", val).then(res => setData(res)).catch(e => console.log(e))}/>
                        <CommonBarChart data={data.map(item => {return item.temperature})} labels={data.map(item => {return item.date_time})} title="Temperature"/>
                    </>
                : <></>}
            </div>
        </div>
    );
};

export default Temperature;