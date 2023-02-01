import { Table, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { Document, Page } from 'react-pdf'
import { Cabinet, CoolingSystem, Graphics, Monitor, Motherboard, OS, Power, Processor, Ram, UPs, SSD, HDD } from './Array';

function PDF(props) {
    return (
        <Document file="Bill.pdf">
            <Page>
                <Table>
                    <TableRow>
                        <TableCell>ITEMS</TableCell>
                        <TableCell>MODEL</TableCell>
                        <TableCell>RATE</TableCell>
                    </TableRow>
                    <TableRow key={1}>
                        <TableCell>Processor</TableCell>
                        {props.data.Processor !== "" && <><TableCell>{Processor.find(obj => obj.id === props.data.Processor).Processor}</TableCell>
                            <TableCell>{Processor.find(obj => obj.id === props.data.Processor).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={2}>
                        <TableCell>Motherboard</TableCell>
                        {props.data.Motherboard !== "" && <><TableCell>{Motherboard.find(obj => obj.id === props.data.Motherboard).Motherboard}</TableCell>
                            <TableCell>{Motherboard.find(obj => obj.id === props.data.Motherboard).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={3}>
                        <TableCell>CoolingSystem</TableCell>
                        {props.data.CoolingSystem !== "" && <><TableCell>{CoolingSystem.find(obj => obj.id === props.data.CoolingSystem).CoolingSystem}</TableCell>
                            <TableCell>{CoolingSystem.find(obj => obj.id === props.data.CoolingSystem).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={4}>
                        <TableCell>Ram</TableCell>
                        {props.data.Ram !== "" && <><TableCell>{Ram.find(obj => obj.id === props.data.Ram).Ram}</TableCell>
                            <TableCell>{Ram.find(obj => obj.id === props.data.Ram).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={5}>
                        <TableCell>SSD</TableCell>
                        {props.data.SSD !== "" && <><TableCell>{SSD.find(obj => obj.id === props.data.SSD).SSD}</TableCell>
                            <TableCell>{SSD.find(obj => obj.id === props.data.SSD).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={6}>
                        <TableCell>HDD</TableCell>
                        {props.data.HDD !== "" && <><TableCell>{HDD.find(obj => obj.id === props.data.HDD).HDD}</TableCell>
                            <TableCell>{HDD.find(obj => obj.id === props.data.HDD).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={7}>
                        <TableCell>Graphics</TableCell>
                        {props.data.Graphics !== "" && <><TableCell>{Graphics.find(obj => obj.id === props.data.Graphics).Graphics}</TableCell>
                            <TableCell>{Graphics.find(obj => obj.id === props.data.Graphics).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={8}>
                        <TableCell>Power</TableCell>
                        {props.data.Power !== "" && <><TableCell>{Power.find(obj => obj.id === props.data.Power).Power}</TableCell>
                            <TableCell>{Power.find(obj => obj.id === props.data.Power).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={9}>
                        <TableCell>Cabinet</TableCell>
                        {props.data.Cabinet !== "" && <><TableCell>{Cabinet.find(obj => obj.id === props.data.Cabinet).Cabinet}</TableCell>
                            <TableCell>{Cabinet.find(obj => obj.id === props.data.Cabinet).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={10}>
                        <TableCell>Monitor</TableCell>
                        {props.data.Monitor !== "" && <><TableCell>{Monitor.find(obj => obj.id === props.data.Monitor).Monitor}</TableCell>
                            <TableCell>{Monitor.find(obj => obj.id === props.data.Monitor).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={11}>
                        <TableCell>OS</TableCell>
                        {props.data.OS !== "" && <><TableCell>{OS.find(obj => obj.id === props.data.OS).OS}</TableCell>
                            <TableCell>{OS.find(obj => obj.id === props.data.OS).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={12}>
                        <TableCell>UPs</TableCell>
                        {props.data.UPs !== "" && <><TableCell>{UPs.find(obj => obj.id === props.data.UPs).UPs}</TableCell>
                            <TableCell>{UPs.find(obj => obj.id === props.data.UPs).price}</TableCell></>}
                    </TableRow>
                    <TableRow key={13}>
                        <TableCell><h4>TOTAL</h4></TableCell>
                        <TableCell></TableCell>
                        <TableCell>{
                            (props.data.Processor !== "" && Processor.find(obj => obj.id === props.data.Processor).price) +
                            (props.data.Motherboard !== "" && Motherboard.find(obj => obj.id === props.data.Motherboard).price) +
                            (props.data.CoolingSystem !== "" && CoolingSystem.find(obj => obj.id === props.data.CoolingSystem).price) +
                            (props.data.Ram !== "" && Ram.find(obj => obj.id === props.data.Ram).price) +
                            (props.data.SSD !== "" && SSD.find(obj => obj.id === props.data.SSD).price) +
                            (props.data.HDD !== "" && HDD.find(obj => obj.id === props.data.HDD).price) +
                            (props.data.Graphics !== "" && Graphics.find(obj => obj.id === props.data.Graphics).price) +
                            (props.data.Power !== "" && Power.find(obj => obj.id === props.data.Power).price) +
                            (props.data.Cabinet !== "" && Cabinet.find(obj => obj.id === props.data.Cabinet).price) +
                            (props.data.Monitor !== "" && Monitor.find(obj => obj.id === props.data.Monitor).price) +
                            (props.data.OS !== "" && OS.find(obj => obj.id === props.data.OS).price) +
                            (props.data.UPs !== "" && UPs.find(obj => obj.id === props.data.UPs).price)}
                        </TableCell>
                    </TableRow>
                </Table>
            </Page>
        </Document>

    )
}

export default PDF