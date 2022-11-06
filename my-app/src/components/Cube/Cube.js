import React, { useState, useEffect, CSSProperties } from 'react';
import './Cube.css';



function Cube() {

  const cubeStyle = "--i:3"
  

  function moveCubeOnClick (e) {
    console.log(e);
    const element = document.getElementById('img')

    element.classList.remove('classname'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('classname'); // start animation
  }

  return (
    <div className='container'>
      <div className='cube'>
        <div style={{'--x': -1, '--y':0}}>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 3}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 2}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 0, '--y':0}}>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 3}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 2}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 1, '--y':0}}>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 3}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 2}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 1}}></span>
        </div>
      </div>
      <div className='cube'>
        <div style={{'--x': -1, '--y':0}}>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 3}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 2}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 0, '--y':0}}>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 3}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 2}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 1, '--y':0}}>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 3}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 2}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 1}}></span>
        </div>
      </div>
      <div className='cube'>
        <div style={{'--x': -1, '--y':0}}>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 3}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 2}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 0, '--y':0}}>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 3}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 2}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 1}}></span>
        </div>
        <div style={{'--x': 1, '--y':0}}>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 3}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 2}}></span>
          <span onClick={(e) => moveCubeOnClick(e)} style={{'--i': 1}}></span>
        </div>
      </div>
    </div>
  );
}

export default Cube;
