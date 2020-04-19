import React, {useState, useEffect} from 'react';
import './common.css';
import CommonTable from './CommonTable';
import { getData } from '../util';
import { SpeedoMeter } from './CommonChart';

const WindSpeed = () => {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData("latest", "wind_speed")
        .then(data => {
            console.log(data);
            setData(data);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    return (
        <div className="content">
            <p className="title">Wind Speed</p>
            <div className="content-inner">
                {loaded ? 
                    <>
                        <CommonTable data={data} accessor="wind_speed" />
                        <SpeedoMeter data={[100]} labels={data.map(item => {return item.date_time})} title="Wind Speed"/>
                    </>
                : <></>}
            </div>
        </div>
    );
};

export default WindSpeed;