import React, {useState, useEffect} from 'react';
import './common.css';
import CommonTable from './CommonTable';
import ChangeInterval from './ChangeInterval';
import { getData } from '../util';
import { CommonBarChart } from './CommonChart';

const Any = () => {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [accessor, setAccessor] = useState("temperature");
    const [interval, setInterval] = useState(24);

    useEffect(() => {
        getData(accessor, interval)
        .then(data => {
            setData(data);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    return (
        <div className="content">
            <p className="title">{accessor.toUpperCase().split("_").join(" ")}</p>
            <div className="content-inner">
                {loaded ? 
                    <>
                        <CommonTable data={data} accessor={accessor} />
                        <ChangeInterval setInterval={setInterval} changeInterval={(val) => getData(accessor, val).then(res => setData(res)).catch(e => console.log(e))}/>
                        <select className="change-accessor" onChange={(evt) => {
                            setAccessor(evt.target.value);
                            getData(evt.target.value, interval) 
                            .then(data => {
                                console.log(data);
                                setData(data);
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        }}>
                            <option value="humidity_in">Humidity in</option>
                            <option value="humidity_out">Humidity out</option>
                            <option value="light">Light</option>
                            <option value="rain">Rain</option>
                            <option value="humidity_out">Humidity out</option>
                            <option value="temperature">Temperature</option>
                            <option value="wind_direction">Wind Direction</option>
                            <option value="wind_speed">Wind Speed</option>
                        </select>
                        <CommonBarChart data={data.map(item => {return item[accessor]})} labels={data.map(item => {return item.date_time})} title=""/>
                    </>
                : <></>}
            </div>
        </div>
    );
};

export default Any;