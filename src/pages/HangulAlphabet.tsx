import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, List } from '@mui/material';
import { ListenCell } from "../components/TableCell";

const alphabet = [
    { letter: 'ㅏ', romanisation: 'a' },
    { letter: 'ㅑ', romanisation: 'ya' },
    // Add the rest of the alphabet here...
];

function HangulAlphabet() {

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Hangul</TableCell>
                    <TableCell>Romanisation</TableCell>
                    <TableCell>Listen</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {alphabet.map((letter, index) => (
                    <TableRow key={index}>
                        <TableCell>{letter.letter}</TableCell>
                        <TableCell>{letter.romanisation}</TableCell>
                        <ListenCell text={letter.letter} lang="ko" />
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default HangulAlphabet;