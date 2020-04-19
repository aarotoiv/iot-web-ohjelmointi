import React, { Component } from 'react';
import './Nav.css';

const NavButton = ({text, click}) => {
    return (
        <button type="button" className="navBtn" onClick={click}>{text.toUpperCase()}</button>
    );
};

const Nav = ({lv, temp, hum, pres, wind, free}) => {
  return (
    <div className="nav">
        <NavButton text={"Last Values"} click={lv} />
        <NavButton text={"Temperature"} click={temp} />
        <NavButton text={"Humidity out"} click={hum} />
        <NavButton text={"Pressure"} click={pres} />
        <NavButton text={"Wind speed"} click={wind} />
        <NavButton text={"Any signal"} click={free} />
    </div>
  );
};

export default Nav;