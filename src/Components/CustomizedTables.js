import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Cabinet, CoolingSystem, Graphics, Monitor, Motherboard, OS, Power, Processor, Ram, UPs, SSD, HDD } from './Array';
import { useLocation } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {

  const { state } = useLocation();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{
              borderWidth: "thick",
              width: "300px"
            }}>ITEMS</StyledTableCell>
            <StyledTableCell sx={{
              borderWidth: "thick",
              width: "300px"
            }}>MODEL</StyledTableCell>
            <StyledTableCell sx={{
              borderWidth: "thick",
              width: "300px"
            }}>QTY</StyledTableCell>
            <StyledTableCell sx={{
              borderWidth: "thick",
              width: "300px"
            }}>RATE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1}>
            <StyledTableCell>Processor</StyledTableCell>
            {state.data.Processor !== "" ?
             <><StyledTableCell>{Processor.find(obj => obj.id === state.data.Processor).Processor}</StyledTableCell>
              <StyledTableCell>{state.Quantity.ProcessorQty}</StyledTableCell>
              <StyledTableCell>{Processor.find(obj => obj.id === state.data.Processor).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={2}>
            <StyledTableCell>Motherboard</StyledTableCell>
            {state.data.Motherboard !== "" ? 
            <><StyledTableCell>{Motherboard.find(obj => obj.id === state.data.Motherboard).Motherboard}</StyledTableCell>
              <StyledTableCell>{state.Quantity.MotherboardQty}</StyledTableCell>
              <StyledTableCell>{Motherboard.find(obj => obj.id === state.data.Motherboard).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={3}>
            <StyledTableCell>CoolingSystem</StyledTableCell>
            {state.data.CoolingSystem !== "" ?
            <><StyledTableCell>{CoolingSystem.find(obj => obj.id === state.data.CoolingSystem).CoolingSystem}</StyledTableCell>
              <StyledTableCell>{state.Quantity.CoolingSystemQty}</StyledTableCell>
              <StyledTableCell>{CoolingSystem.find(obj => obj.id === state.data.CoolingSystem).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={4}>
            <StyledTableCell>Ram</StyledTableCell>
            {state.data.Ram !== "" ?
            <><StyledTableCell>{Ram.find(obj => obj.id === state.data.Ram).Ram}</StyledTableCell>
              <StyledTableCell>{state.Quantity.RamQty}</StyledTableCell>
              <StyledTableCell>{Ram.find(obj => obj.id === state.data.Ram).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={5}>
            <StyledTableCell>SSD</StyledTableCell>
            {state.data.SSD !== "" ?
            <><StyledTableCell>{SSD.find(obj => obj.id === state.data.SSD).SSD}</StyledTableCell>
              <StyledTableCell>{state.Quantity.SSDQty}</StyledTableCell>
              <StyledTableCell>{SSD.find(obj => obj.id === state.data.SSD).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={6}>
            <StyledTableCell>HDD</StyledTableCell>
            {state.data.HDD !== "" ?
            <><StyledTableCell>{HDD.find(obj => obj.id === state.data.HDD).HDD}</StyledTableCell>
              <StyledTableCell>{state.Quantity.HDDQty}</StyledTableCell>
              <StyledTableCell>{HDD.find(obj => obj.id === state.data.HDD).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={7}>
            <StyledTableCell>Graphics</StyledTableCell>
            {state.data.Graphics !== "" ?
            <><StyledTableCell>{Graphics.find(obj => obj.id === state.data.Graphics).Graphics}</StyledTableCell>
              <StyledTableCell>{state.Quantity.GraphicsQty}</StyledTableCell>
              <StyledTableCell>{Graphics.find(obj => obj.id === state.data.Graphics).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={8}>
            <StyledTableCell>Power</StyledTableCell>
            {state.data.Power !== "" ?
            <><StyledTableCell>{Power.find(obj => obj.id === state.data.Power).Power}</StyledTableCell>
              <StyledTableCell>{state.Quantity.PowerQty}</StyledTableCell>
              <StyledTableCell>{Power.find(obj => obj.id === state.data.Power).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={9}>
            <StyledTableCell>Cabinet</StyledTableCell>
            {state.data.Cabinet !== "" ?
            <><StyledTableCell>{Cabinet.find(obj => obj.id === state.data.Cabinet).Cabinet}</StyledTableCell>
              <StyledTableCell>{state.Quantity.CabinetQty}</StyledTableCell>
              <StyledTableCell>{Cabinet.find(obj => obj.id === state.data.Cabinet).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={10}>
            <StyledTableCell>Monitor</StyledTableCell>
            {state.data.Monitor !== "" ?
            <><StyledTableCell>{Monitor.find(obj => obj.id === state.data.Monitor).Monitor}</StyledTableCell>
              <StyledTableCell>{state.Quantity.MonitorQty}</StyledTableCell>
              <StyledTableCell>{Monitor.find(obj => obj.id === state.data.Monitor).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={11}>
            <StyledTableCell>OS</StyledTableCell>
            {state.data.OS !== "" ?
            <><StyledTableCell>{OS.find(obj => obj.id === state.data.OS).OS}</StyledTableCell>
              <StyledTableCell>{state.Quantity.OSQty}</StyledTableCell>
              <StyledTableCell>{OS.find(obj => obj.id === state.data.OS).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={12}>
            <StyledTableCell>UPs</StyledTableCell>
            {state.data.UPs !== "" ?
            <><StyledTableCell>{UPs.find(obj => obj.id === state.data.UPs).UPs}</StyledTableCell>
              <StyledTableCell>{state.Quantity.UPsQty}</StyledTableCell>
              <StyledTableCell>{UPs.find(obj => obj.id === state.data.UPs).price}</StyledTableCell></> :
               <><StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell>
               <StyledTableCell></StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={13}>
            <StyledTableCell><h4>TOTAL</h4></StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>{
              (state.data.Processor !== "" && Processor.find(obj => obj.id === state.data.Processor).price) +
              (state.data.Motherboard !== "" && Motherboard.find(obj => obj.id === state.data.Motherboard).price) +
              (state.data.CoolingSystem !== "" && CoolingSystem.find(obj => obj.id === state.data.CoolingSystem).price) +
              ((state.data.Ram !== "" && Ram.find(obj => obj.id === state.data.Ram).price) * (state.Quantity.RamQty !== "" && parseInt(state.Quantity.RamQty))) +
              (state.data.SSD !== "" && SSD.find(obj => obj.id === state.data.SSD).price) +
              ((state.data.HDD !== "" && HDD.find(obj => obj.id === state.data.HDD).price) * (state.Quantity.HDDQty !== "" && parseInt(state.Quantity.HDDQty))) +
              (state.data.Graphics !== "" && Graphics.find(obj => obj.id === state.data.Graphics).price) +
              (state.data.Power !== "" && Power.find(obj => obj.id === state.data.Power).price) +
              (state.data.Cabinet !== "" && Cabinet.find(obj => obj.id === state.data.Cabinet).price) +
              (state.data.Monitor !== "" && Monitor.find(obj => obj.id === state.data.Monitor).price) +
              (state.data.OS !== "" && OS.find(obj => obj.id === state.data.OS).price) +
              (state.data.UPs !== "" && UPs.find(obj => obj.id === state.data.UPs).price)}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}