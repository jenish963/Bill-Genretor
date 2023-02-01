import React from 'react'
import { useState } from 'react';

const Processor = ["Processor 1", "Processor 2", "Processor 3"];
const Motherboard = ["Motherboard 1", "Motherboard 2", "Motherboard 3"];
const CoolingSystem = ["CoolingSystem 1", "CoolingSystem 2", "CoolingSystem 3"];
const Ram = ["Ram 1", "Ram 2", "Ram 3"];
const SSD = ["SSD 1", "SSD 2", "SSD 3"];
const HDD = ["HDD 1", "HDD 2", "HDD 3"];
const Graphics = ["Graphics 1", "Graphics 2", "Graphics 3"];
const Power = ["Power 1", "Power 2", "Power 3"];
const Cabinet = ["Cabinet 1", "Cabinet 2", "Cabinet 3"];
const Monitor = ["Monitor 1", "Monitor 2", "Monitor 3"];
const OS = ["OS 1", "OS 2", "OS 3"];
const UPs = ["UPs 1", "UPs 2", "UPs 3"];

function Bill() {

    const data = {
        Processor: '',
        Motherboard: '',
        CoolingSystem: '',
        Ram: '',
        SSD: '',
        HDD: '',
        Graphics: '',
        Power: '',
        Cabinet: '',
        Monitor: '',
        OS: '',
        UPs: ''
    }

    const [selectedOption, setSelectedOption] = useState(data);

    const getOption = (e) => {
        setSelectedOption({
            ...selectedOption,
            [e.target.name] : e.target.value
        })
    }

  return (
    <div>
    <div>
        <h2>Build It Yourself</h2>
    </div>
    <div>
        <label>Processor</label> 
        <select value={data.Processor} name='Processor' onChange={getOption}>
        <option></option>
        {Processor.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
    </div><br/>
    <div>
        <label>Motherboard</label> 
        <select value={data.Motherboard} name='Motherboard' onChange={getOption}>
        <option></option>
        {Motherboard.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
    </div><br/>
    <div>
        <label>CoolingSystem</label> 
        <select value={data.CoolingSystem} name='CoolingSystem' onChange={getOption}>
        <option></option>
        {CoolingSystem.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
    </div><br/>
    <div>
        <label>Ram</label> 
        <select value={data.Ram} name='Ram' onChange={getOption}>
        <option></option>
        {Ram.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
        <select>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>
    </div><br/>
    <div>
        <label>SSD</label> 
        <select value={data.SSD} name='SSD' onChange={getOption}>
        <option></option>
        {SSD.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
    {/* </div>
    <div> */}
        <label>HDD</label> 
        <select value={data.HDD} name='HDD' onChange={getOption}>
        <option></option>
        {HDD.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
        <select>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>
    </div><br/>
    <div>
        <label>Graphics</label> 
        <select value={data.Graphics} name='Graphics' onChange={getOption}>
        <option></option>
        {Graphics.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
    {/* </div>
    <div> */}
        <label>Power</label> 
        <select value={data.Power} name='Power' onChange={getOption}>
        <option></option>
        {Power.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
    </div><br/>
    <div>
        <label>Cabinet</label> 
        <select value={data.Cabinet} name='Cabinet' onChange={getOption}>
        <option></option>
        {Cabinet.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
    {/* </div>
    <div> */}
        <label>Monitor</label> 
        <select value={data.Monitor} name='Monitor' onChange={getOption}>
        <option></option>
        {Monitor.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
    </div><br/>
    <div>
        <label>OS</label> 
        <select value={data.OS} name='OS' onChange={getOption}>
        <option></option>
        {OS.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
    {/* </div>
    <div> */}
        <label>UPs</label> 
        <select value={data.UPs} name='UPs' onChange={getOption}>
        <option></option>
        {UPs.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
        </select>
    </div><hr/>
        <pre>{ JSON.stringify(selectedOption, undefined, 2)}</pre><hr/>
    </div>
  )
}

export default Bill