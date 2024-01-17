import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Popover, Paper, TableContainer, Select, MenuItem, Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { ListenCell } from "../components/TableCell";
import alphabet, { Alphabet } from '../Alphabet';
import { SpeakButton } from '../components/SpeakButton';

function HangulAlphabet() {
    const [filter, setFilter] = useState('');
    const [view, setView] = useState('table'); // 'table' or 'single'
    const [currentLetter, setCurrentLetter] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setFilter(event.target.value);
    };

    const filteredAlphabet = filter ? alphabet.filter(letter => letter.type === filter) : alphabet;

    return (
        <div>
            <Card sx={{ maxWidth: 800, margin: "auto", marginTop: 2 }}>
                <CardContent>
                    <form noValidate autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Select value={filter} onChange={handleChange} displayEmpty fullWidth>
                                    <MenuItem value="">Alle letters</MenuItem>
                                    <MenuItem value="basis medeklinker">Basis Medeklinker</MenuItem>
                                    <MenuItem value="dubbele medeklinker">Dubbele Medeklinker</MenuItem>
                                    <MenuItem value="tweeklank">Tweeklank</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" onClick={() => setView(view === 'table' ? 'single' : 'table')}>
                                    Switch to {view === 'table' ? 'Single Letter View' : 'Table View'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>

            {view === 'table' ? (
                <TableContainer
                    component={Paper}
                    sx={{ maxWidth: 800, margin: "auto", marginTop: 2 }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>한글</TableCell>
                                <TableCell>Romanisation</TableCell>
                                <TableCell>Soort</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>듣다</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredAlphabet.map((letter, index) => (
                                <TableRow key={index}>
                                    <TableCell style={{ width: "65px" }}>{letter.hangul}</TableCell>
                                    <TableCell>{Array.isArray(letter.romanisation) ? letter.romanisation.join(', ') : letter.romanisation}</TableCell>
                                    <TableCell>{letter.type}</TableCell>
                                    <ListenCell text={letter.hangul} lang="ko" />
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <div>
                    <Card sx={{ maxWidth: 800, margin: "auto", marginTop: 2 }}>
                        <CardContent>
                            <Typography variant="h3" align="center">{filteredAlphabet[currentLetter].hangul}</Typography>
                            <Typography variant="h5" align="center">{filteredAlphabet[currentLetter].romanisation}</Typography>
                            <Typography align="center">{filteredAlphabet[currentLetter].type}</Typography>

                            <Box
                                component="span"
                                m={1}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"

                            >
                                <Button variant="contained" color="primary" onClick={() => setCurrentLetter((currentLetter - 1) % filteredAlphabet.length)}>Previous Letter</Button>
                                <SpeakButton text={filteredAlphabet[currentLetter].hangul} lang="ko" />
                                <Button variant="contained" color="primary" onClick={() => setCurrentLetter((currentLetter + 1) % filteredAlphabet.length)}>Next Letter</Button>
                            </Box>


                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}

export default HangulAlphabet;