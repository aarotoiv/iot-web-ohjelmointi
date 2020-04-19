import React, {useState} from 'react';
import Nav from './components/Nav';
import LastValues from './components/LastValues';
import './App.css';
import Temperature from './components/Temperature';
import HumidityOut from './components/HumidityOut';
import Pressure from './components/Pressure';
import WindSpeed from './components/WindSpeed';
import Any from './components/Any';

const App = () => {
  const [section, setSection] = useState(0);
  return (
    <div className="app">
        <Nav 
          section={section}
          lv={() => setSection(0)}
          temp={() => setSection(1)}
          hum={() => setSection(2)}
          pres={() => setSection(3)}
          wind={() => setSection(4)}
          free={() => setSection(5)}
        />
        <div className="content-container">
          {
            section == 0
            ? 
            <LastValues />
            :
            section == 1
            ?
            <Temperature />
            :
            section == 2
            ?
            <HumidityOut />
            :
            section == 3
            ?
            <Pressure />
            :
            section == 4
            ?
            <WindSpeed />
            :
            section == 5
            ?
            <Any />
            :
            <></>
          }
        </div>
    </div>
    
  );
};

export default App;
