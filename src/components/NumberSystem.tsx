import React from 'react';
import {
    Table, TableBody, TableCell, TableHead, TableContainer, TablePagination,
    TableRow, Card, CardHeader,
} from '@mui/material';
import { ListenCell, ListenHeadCell } from './TableCell';
import { Number, NumbersListProps } from '../dto/types';

const NumberSystem: React.FC<NumbersListProps> = ({ showRomanisation, numbers, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, numberSystem }) => {
    const systemNumbers = numbers.filter((number: Number) => numberSystem === 'korean' ? number.korean : number.sinoKorean);
    const systemNumbersLength = systemNumbers.length;

    return (
        <Card sx={{ margin: "auto", marginTop: 2 }} className='max-width'>
            <CardHeader title={numberSystem === 'korean' ? 'Korean Numbers' : 'Sino-Korean Numbers'} />
            <TableContainer
                sx={{ margin: "auto" }}
            >
                <Table sx={{ margin: "auto" }} className="number-table max-width">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Nummer</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>한글</TableCell>
                            {showRomanisation && (
                                <TableCell align="left" sx={{ fontWeight: "bold" }}>Romanisatie</TableCell>
                            )}
                            <ListenHeadCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? numbers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : numbers
                        ).map((number: Number) => (
                            <TableRow key={number.number}>
                                <TableCell align="center" >{number.number}</TableCell>
                                <TableCell align="left" >{numberSystem === 'korean' ? number.korean : number.sinoKorean}</TableCell>
                                {showRomanisation && (
                                    <TableCell align="left" >{numberSystem === 'korean' ? number.koreanRomanisation : number.sinoKoreanRomanisation}</TableCell>
                                )}
                                <ListenCell text={(numberSystem === 'korean' ? number.korean : number.sinoKorean) || ''} lang="ko" />
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
                    labelRowsPerPage="Aantal"
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Card>
    );
};

export default NumberSystem;