import React, {useState, useEffect} from 'react';
import './common.css';
import CommonTable from './CommonTable';
import ChangeInterval from './ChangeInterval';
import { getData } from '../util';

const Temperature = () => {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [interval, setInterval] = useState(24);

    useEffect(() => {
        getData("temperature", interval)
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
            {loaded ? 
                <>
                    <CommonTable data={data} accessor="temperature" />
                    <ChangeInterval changeInterval={(val) => getData("temperature", val).then(res => setData(res)).catch(e => console.log(e))}/>
                </>
            : <></>}
        </div>
    );
};

export default Temperature;