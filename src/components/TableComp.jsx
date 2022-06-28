import React from 'react';
import "../css/tableComp.css"
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import dataDummy from "../data-dummy/DataDummy.json"

function TableComp(props) {

    return (
        <>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><p className="tablehead-font">Id Name</p>
                            </TableCell>
                            <TableCell><p className="tablehead-font">Type</p>
                            </TableCell>
                            <TableCell><p className="tablehead-font">Campaign</p>
                            </TableCell>
                            <TableCell><p className="tablehead-font">Total Blast</p>
                            </TableCell>
                            <TableCell><p className="tablehead-font">Status</p>
                            </TableCell>
                            <TableCell><p className="tablehead-font">Date</p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataDummy.map((item) => (
                            <TableRow>
                                <TableCell><p className="text-center text-black">{item.idName}</p></TableCell>
                                <TableCell><p className="text-center text-black">{item.type}</p></TableCell>
                                <TableCell><p className="text-center text-black">{item.campaign}</p></TableCell>
                                <TableCell><p className="text-center text-black">{item.totalBlast}</p></TableCell>
                                <TableCell><p className="text-center text-black">{item.status}</p></TableCell>
                                <TableCell><p className="text-center text-black">{item.date}</p></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default TableComp;