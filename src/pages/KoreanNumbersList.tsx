// KoreanNumberList.tsx
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    TableContainer,
} from "@mui/material";
import { ListenCell } from "../components/TableCell";
import React from "react";
import { NumberListProps } from '../Numbers';


export const KoreanNumberList = ({
    numbers,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
}: NumberListProps) => {
    return (
        <div>
            <TableContainer
                component={Paper}
                sx={{ maxWidth: 800, margin: "auto", marginTop: 2 }}
            >
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
                                Number
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
                                Korean
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
                                Romanisation
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold", color: "primary.main" }}
                            >
                                Listen
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {numbers
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((number) => (
                                <TableRow key={number.number}>
                                    <TableCell>{number.number}</TableCell>
                                    <TableCell>{number.korean}</TableCell>
                                    <TableCell>{number.koreanRomanisation}</TableCell>
                                    <ListenCell text={number.korean} lang="ko" />
                                </TableRow>
                            ))}
                    </TableBody>
                    <TablePagination
                        rowsPerPageOptions={[1, 10, 25, 100, numbers.length]}
                        component="div"
                        count={numbers.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Table>
            </TableContainer>
        </div>
    );
};

export default KoreanNumberList;