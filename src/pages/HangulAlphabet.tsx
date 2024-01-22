import React from 'react';
import alphabet, { Alphabet, AlphabetType, alphabetTypeExplanations } from '../Alphabet';
import { SpeakButton, SpeakCard } from '../components/Speak';
import { Box, Card, CardContent, Grid, Typography, styled } from '@mui/material';

function HangulAlphabet() {
    // Group alphabet by type
    const alphabetByType: { [key in AlphabetType]?: Alphabet[] } = alphabet.reduce((groups, letter) => {
        const group = (groups[letter.type as AlphabetType] || []) as Alphabet[];
        group.push(letter);
        groups[letter.type as AlphabetType] = group;
        return groups;
    }, {} as { [key in AlphabetType]?: Alphabet[] });


    return (
        <section style={{
            marginTop: '-28px', marginBottom: '14px'
        }}>
            {
                Object.entries(alphabetByType).map(([type, letters]) => (
                    <div key={type}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} style={{ marginTop: '14px' }}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h4">{type}</Typography>
                                        <Typography variant="subtitle1">{alphabetTypeExplanations[type as AlphabetType]}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            {letters.map((letter, index) => (
                                <Grid item xs={4} sm={2} key={index}>
                                    <SpeakCard text={letter.hangul} lang={'ko'} cardContent={<>
                                        <Typography variant="h5" align="center">{letter.hangul}</Typography>
                                        <Typography variant="subtitle1" align="center">{Array.isArray(letter.romanisation) ? letter.romanisation.join(', ') : letter.romanisation}
                                            {letter.remarks && ` (${letter.remarks})`}
                                        </Typography>
                                    </>
                                    } />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ))
            }
        </section >
    );
}

export default HangulAlphabet;