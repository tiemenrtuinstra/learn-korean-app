import React from 'react';
import { Number, NumberListProps } from '../Numbers';
import {
    Table, TableBody, TableCell, TableHead, TableContainer, TablePagination,
    TableRow, Paper, Card, CardHeader,
} from '@mui/material';
import { ListenCell } from './TableCell';

type NumbersListProps = NumberListProps & {
    numberSystem: 'korean' | 'sino-korean';
};

const NumberSystem: React.FC<NumbersListProps> = ({ numbers, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, numberSystem }) => {
    const systemNumbers = numbers.filter(number => numberSystem === 'korean' ? number.korean : number.sinoKorean);
    const systemNumbersLength = systemNumbers.length;

    return (
        <Card sx={{ maxWidth: 800, margin: "auto", marginTop: 2 }}>
            <CardHeader title={numberSystem === 'korean' ? 'Korean Numbers' : 'Sino-Korean Numbers'} />
            <TableContainer
                component={Paper}
                sx={{ maxWidth: 800, margin: "auto" }}
            >
                <Table sx={{ maxWidth: 800, margin: "auto" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{width:"10px"}} sx={{ fontWeight: "bold" }}>Number</TableCell>
                            <TableCell align="left" style={{ width: "60px" }} sx={{ fontWeight: "bold" }}>한글</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Romanisation</TableCell>
                            <TableCell align="center" style={{width:"60px"}} sx={{ fontWeight: "bold" }}>듣다</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? numbers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : numbers
                        ).map((number: Number) => (
                            <TableRow key={number.number}>
                                <TableCell align="center" style={{ width: "10px" }}>{number.number}</TableCell>
                                <TableCell align="left" style={{ width: "10px" }}>{numberSystem === 'korean' ? number.korean : number.sinoKorean}</TableCell>
                                <TableCell align="left" style={{ width: "10px" }}>{numberSystem === 'korean' ? number.koreanRomanisation : number.sinoKoreanRomanisation}</TableCell>
                                <ListenCell text={numberSystem === 'korean' ? number.korean : number.sinoKorean} lang="ko" />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[1, 10, 25, 100, systemNumbersLength]}
                    component="div"
                    count={systemNumbersLength}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Card>
    );
};

export default NumberSystem;