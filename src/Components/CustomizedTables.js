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

export default function CustomizedTables(props) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{
              borderWidth: "thick",
              width:"300px"
            }}>ITEMS</StyledTableCell>
            <StyledTableCell sx={{
              borderWidth: "thick",
              width:"300px"
            }}>MODEL</StyledTableCell>
            <StyledTableCell sx={{
              borderWidth: "thick",
              width:"300px"
            }}>RATE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1}>
            <StyledTableCell>Processor</StyledTableCell>
            {props.data.Processor!=="" && <><StyledTableCell>{Processor.find(obj => obj.id === props.data.Processor).Processor}</StyledTableCell>
            <StyledTableCell>{Processor.find(obj => obj.id === props.data.Processor).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={2}>
            <StyledTableCell>Motherboard</StyledTableCell>
            {props.data.Motherboard!=="" && <><StyledTableCell>{Motherboard.find(obj => obj.id === props.data.Motherboard).Motherboard}</StyledTableCell>
            <StyledTableCell>{Motherboard.find(obj => obj.id === props.data.Motherboard).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={3}>
            <StyledTableCell>CoolingSystem</StyledTableCell>
            {props.data.CoolingSystem!=="" && <><StyledTableCell>{CoolingSystem.find(obj => obj.id === props.data.CoolingSystem).CoolingSystem}</StyledTableCell>
            <StyledTableCell>{CoolingSystem.find(obj => obj.id === props.data.CoolingSystem).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={4}>
            <StyledTableCell>Ram</StyledTableCell>
            {props.data.Ram!=="" && <><StyledTableCell>{Ram.find(obj => obj.id === props.data.Ram).Ram}</StyledTableCell>
            <StyledTableCell>{Ram.find(obj => obj.id === props.data.Ram).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={5}>
            <StyledTableCell>SSD</StyledTableCell>
            {props.data.SSD!=="" && <><StyledTableCell>{SSD.find(obj => obj.id === props.data.SSD).SSD}</StyledTableCell>
            <StyledTableCell>{SSD.find(obj => obj.id === props.data.SSD).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={6}>
            <StyledTableCell>HDD</StyledTableCell>
            {props.data.HDD!=="" && <><StyledTableCell>{HDD.find(obj => obj.id === props.data.HDD).HDD}</StyledTableCell>
            <StyledTableCell>{HDD.find(obj => obj.id === props.data.HDD).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={7}>
            <StyledTableCell>Graphics</StyledTableCell>
            {props.data.Graphics!=="" && <><StyledTableCell>{Graphics.find(obj => obj.id === props.data.Graphics).Graphics}</StyledTableCell>
            <StyledTableCell>{Graphics.find(obj => obj.id === props.data.Graphics).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={8}>
            <StyledTableCell>Power</StyledTableCell>
            {props.data.Power!=="" && <><StyledTableCell>{Power.find(obj => obj.id === props.data.Power).Power}</StyledTableCell>
            <StyledTableCell>{Power.find(obj => obj.id === props.data.Power).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={9}>
            <StyledTableCell>Cabinet</StyledTableCell>
            {props.data.Cabinet!=="" && <><StyledTableCell>{Cabinet.find(obj => obj.id === props.data.Cabinet).Cabinet}</StyledTableCell>
            <StyledTableCell>{Cabinet.find(obj => obj.id === props.data.Cabinet).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={10}>
            <StyledTableCell>Monitor</StyledTableCell>
            {props.data.Monitor!=="" && <><StyledTableCell>{Monitor.find(obj => obj.id === props.data.Monitor).Monitor}</StyledTableCell>
            <StyledTableCell>{Monitor.find(obj => obj.id === props.data.Monitor).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={11}>
            <StyledTableCell>OS</StyledTableCell>
            {props.data.OS!=="" && <><StyledTableCell>{OS.find(obj => obj.id === props.data.OS).OS}</StyledTableCell>
            <StyledTableCell>{OS.find(obj => obj.id === props.data.OS).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={12}>
            <StyledTableCell>UPs</StyledTableCell>
            {props.data.UPs!=="" &&<><StyledTableCell>{UPs.find(obj => obj.id === props.data.UPs).UPs}</StyledTableCell>
            <StyledTableCell>{UPs.find(obj => obj.id === props.data.UPs).price}</StyledTableCell></>}
          </StyledTableRow>
          <StyledTableRow key={13}>
            <StyledTableCell><h4>TOTAL</h4></StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>{
              (props.data.Processor!=="" && Processor.find(obj => obj.id === props.data.Processor).price) +
              (props.data.Motherboard!=="" && Motherboard.find(obj => obj.id === props.data.Motherboard).price) +
              (props.data.CoolingSystem!=="" && CoolingSystem.find(obj => obj.id === props.data.CoolingSystem).price) +
              (props.data.Ram!=="" && Ram.find(obj => obj.id === props.data.Ram).price) +
              (props.data.SSD!=="" && SSD.find(obj => obj.id === props.data.SSD).price) +
              (props.data.HDD!=="" && HDD.find(obj => obj.id === props.data.HDD).price) +
              (props.data.Graphics!=="" && Graphics.find(obj => obj.id === props.data.Graphics).price) +
              (props.data.Power!=="" && Power.find(obj => obj.id === props.data.Power).price) +
              (props.data.Cabinet!=="" && Cabinet.find(obj => obj.id === props.data.Cabinet).price) +
              (props.data.Monitor!=="" && Monitor.find(obj => obj.id === props.data.Monitor).price) +
              (props.data.OS!=="" && OS.find(obj => obj.id === props.data.OS).price) +
              (props.data.UPs!=="" && UPs.find(obj => obj.id === props.data.UPs).price)}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}