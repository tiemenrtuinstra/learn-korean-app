import React from 'react';
import alphabet, { alphabetTypeExplanations } from '../Alphabet';
import { SpeakCard } from '../components/Speak';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Alphabet } from '../dto/types';
import { AlphabetType } from '../dto/enums';

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
                                        <Typography variant="h5" align="center" className={"hangulFont"}>{letter.hangul}</Typography>
                                        <Typography variant="subtitle1" align="center">{Array.isArray(letter.romanisation) ? letter.romanisation.join(', ') : letter.romanisation}
                                            {letter.name && ` ( ${letter.name} )`}
                                        </Typography>
                                        <Typography variant="subtitle2" align="center">
                                            {letter.remarks && ` ( ${letter.remarks} )`}
                                        </Typography>
                                    </>
                                    } />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ))
            }
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ marginTop: '14px' }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4">Opmerkingen</Typography>
                            <Typography variant="h5">Klinkers</Typography>
                            <Typography variant="subtitle1">
                                <ul>
                                    <li>De ‘e’ en de ‘ae’ hierboven hebben dezelfde uitspraak, maar worden anders geschreven. Een beetje zoals in het Nederlands met ‘au’ en ‘ou’.</li>
                                    <li>De ‘ye’ heeft net zoals bij de ‘e’ dezelfde uitspraak als ‘yae’.</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </section >
    );
}

export default HangulAlphabet;