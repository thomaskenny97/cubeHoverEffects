import React, { useState, useEffect, CSSProperties } from 'react';
import './Cube.css';



function Cube() {

  const cubeStyle = "--i:3"

  return (
    <div className='container'>
      <div className='cube'>
        <div style={{'--x': -1, '--y':0}}>
          <span style={{'--i': 3}}></span>
          <span style={{'--i': 2}}></span>
          <span style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 0, '--y':0}}>
          <span style={{'--i': 3}}></span>
          <span style={{'--i': 2}}></span>
          <span style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 1, '--y':0}}>
          <span style={{'--i': 3}}></span>
          <span style={{'--i': 2}}></span>
          <span style={{'--i': 1}}></span>
        </div>
      </div>
      <div className='cube'>
        <div style={{'--x': -1, '--y':0}}>
          <span style={{'--i': 3}}></span>
          <span style={{'--i': 2}}></span>
          <span style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 0, '--y':0}}>
          <span style={{'--i': 3}}></span>
          <span style={{'--i': 2}}></span>
          <span style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 1, '--y':0}}>
          <span style={{'--i': 3}}></span>
          <span style={{'--i': 2}}></span>
          <span style={{'--i': 1}}></span>
        </div>
      </div>
      <div className='cube'>
        <div style={{'--x': -1, '--y':0}}>
          <span style={{'--i': 3}}></span>
          <span style={{'--i': 2}}></span>
          <span style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 0, '--y':0}}>
          <span style={{'--i': 3}}></span>
          <span style={{'--i': 2}}></span>
          <span style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 1, '--y':0}}>
          <span style={{'--i': 3}}></span>
          <span style={{'--i': 2}}></span>
          <span style={{'--i': 1}}></span>
        </div>
      </div>
    </div>
  );
}

export default Cube;
