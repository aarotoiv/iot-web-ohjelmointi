import React, {useState} from 'react';
import Nav from './components/Nav';
import LastValues from './components/LastValues';
import './App.css';

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
            <div></div> 
          }
        </div>
    </div>
    
  );
};

export default App;
