import React from 'react'
import "./App.css"
import ComputerParts from './components/ComputerParts'
import ComputerPorts from './components/ComputerPorts'
import TexttEntry from './components/TexttEntry'
import DisplayDevices from './components/DisplayDevices'
import VR from './components/VR'
import PhysicalControls from './components/PhysicalControls'
import Printing from './components/Printing'

function App() {
  return (
    <>
      <div className="nav">
        <a href="#parts">Parts</a>
        <a href="#ports">Ports</a>
        <a href="#text">Text Input</a>
        <a href="#display">Display</a>
        <a href="#vr">VR</a>
        <a href="#controls">Controls</a>
        <a href="#print">Printing</a>
      </div>
      <h1 id='parts'>Parts</h1>
      <ComputerParts />
      <h2 id='ports'>Computer Ports</h2>
      <ComputerPorts />
      <h2 id='text'>Text Entry Input</h2>
      <TexttEntry />
      <h2 id='display'>Display Devices</h2>
      <DisplayDevices />
      <h2 id='vr'>VR | 3D</h2>
      <VR />
      <h2 id='controls'>Physical Controls, Sensors, and Special Devices</h2>
      <PhysicalControls />
      <h2 id='print'>Printing</h2>
      <Printing />

      <a className='up' href="#">Home</a>
    </>
  )
}

export default App