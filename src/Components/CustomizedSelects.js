import * as React from 'react';
// import { useRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormLabel } from '@mui/material';
import {Button} from '@mui/material';
import Card from '@mui/material/Card';
import CustomizedTables from './CustomizedTables';
import { Cabinet, CoolingSystem, Graphics, Monitor, Motherboard, OS, Power, Processor, Ram, UPs, SSD, HDD } from './Array';
import jsPDF from 'jspdf';
import PDF from './PDF';
// import { Document, Page } from 'react-pdf';


export default function CustomizedSelects() {
  
  const Options = {
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

const [selectedOption, setSelectedOption] = React.useState(Options);

  const handleChange = (event) => {
    setSelectedOption({
      ...selectedOption,
      [event.target.name] : event.target.value
  })
  };

  // const inputRef = useRef(null);

  const generatePDF = () => {

    // // const input = inputRef.current;

    const pdf = new jsPDF();

    pdf.text("<CustomizedTables data={selectedOption}/>", 10, 10);

    // pdf.fromHTML(input, 15, 15, {
    //   width: 170,
    // });

    pdf.save('PC_Builder.pdf');
    // <PDF data={selectedOption}/>

  }  

  return (
    <React.Fragment>
    <Card 
    variant="outlined" 
    className='container' 
    sx={{ maxWidth: "40%", display: "inline-block", width: "-webkit-fill-available"}}
    >
    {/* <Grid container spacing={3}>
      <Grid item xs={12} sm={6}> */}
      <div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>Processor</FormLabel>
        <Select
          value={selectedOption.Processor}
          name="Processor"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Processor.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.Processor}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={12} sm={6}> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>Motherboard</FormLabel>
        <Select
          value={selectedOption.Motherboard}
          name="Motherboard"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {selectedOption.Processor !== "" && Motherboard.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.Motherboard}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={6} sm={3}> */}
    </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>CoolingSystem</FormLabel>
        <Select
          value={selectedOption.CoolingSystem}
          name="CoolingSystem"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {CoolingSystem.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.CoolingSystem}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={6} sm={3}> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>Ram</FormLabel>
        <Select
          value={selectedOption.Ram}
          name="Ram"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Ram.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.Ram}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={6} sm={3}> */}
    </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>SSD</FormLabel>
        <Select
          value={selectedOption.SSD}
          name="SSD"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {SSD.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.SSD}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={12} sm={6}> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>HDD</FormLabel>
        <Select
          value={selectedOption.HDD}
          name="HDD"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {HDD.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.HDD}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={12} sm={6}> */}
    </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>Graphics</FormLabel>
        <Select
          value={selectedOption.Graphics}
          name="Graphics"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Graphics.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.Graphics}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={6} sm={3}> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>Power</FormLabel>
        <Select
          value={selectedOption.Power}
          name="Power"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Power.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.Power}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={6} sm={3}> */}
    </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>Cabinet</FormLabel>
        <Select
          value={selectedOption.Cabinet}
          name="Cabinet"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Cabinet.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.Cabinet}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={6} sm={3}> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>Monitor</FormLabel>
        <Select
          value={selectedOption.Monitor}
          name="Monitor"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Monitor.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.Monitor}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={12} sm={6}> */}
    </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>OS</FormLabel>
        <Select
          value={selectedOption.OS}
          name="OS"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {OS.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.OS}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid item xs={12} sm={6}> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel>UPs</FormLabel>
        <Select
          value={selectedOption.UPs}
          name="UPs"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {UPs.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.UPs}</MenuItem>
           ))}
        </Select>
      </FormControl>
    {/* </Grid>
    <Grid  item xs={12}> */}
      </div>
      <div>
    <Button variant="contained" color="primary" onClick={generatePDF}>
        Export to PDF
    </Button>
    {/* </Grid>
    </Grid> */}
    </div>
    </div>
    </Card>
        <CustomizedTables data={selectedOption}/>
        <PDF data={selectedOption}/>
    </React.Fragment>
  );
}