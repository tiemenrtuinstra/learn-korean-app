import React from 'react';
import alphabet, { alphabetTypeExplanations } from '../Alphabet';
import { SpeakCard } from '../components/Speak';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Grid, Typography } from '@mui/material';
import { Alphabet } from '../dto/types';
import { AlphabetType } from '../dto/enums';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface HangulAlphabetProps {
    showRomanisation: boolean;
}

function HangulAlphabet({ showRomanisation }: HangulAlphabetProps): JSX.Element {
    // Group alphabet by type
    const alphabetByType: { [key in AlphabetType]?: Alphabet[] } = alphabet.reduce((groups, letter) => {
        const group = (groups[letter.type as AlphabetType] || []) as Alphabet[];
        group.push(letter);
        groups[letter.type as AlphabetType] = group;
        return groups;
    }, {} as { [key in AlphabetType]?: Alphabet[] });

    return (
        <section style={{ marginTop: "-7px", marginBottom: '14px' }} className='max-width'>
            {Object.entries(alphabetByType).map(([type, letters]) => (
                <div key={type}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} style={{ marginTop: "7px", marginBottom: "7px" }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ArrowDownwardIcon />}
                                    aria-controls="{type}-content"
                                    id='{type}-header'
                                >
                                    <Typography variant="h4">{type}s</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="subtitle1">{alphabetTypeExplanations[type as AlphabetType]}</Typography>

                                    <ul>{
                                        /*if type is klinkers then show the following*/
                                        type === 'Klinker' && (
                                            <>
                                                <li>De ‘e’ en de ‘ae’ hierboven hebben dezelfde uitspraak, maar worden anders geschreven. Een beetje zoals in het Nederlands met ‘au’ en ‘ou’.</li>
                                                <li>De ‘ye’ heeft net zoals bij de ‘e’ dezelfde uitspraak als ‘yae’.</li>
                                            </>
                                        )

                                    }{
                                            letters.map((letter, index) => (
                                                <li key={index}>
                                                    <Typography variant="h5" style={{ display: "inline" }} className={"hangulFont"}>{letter.hangul}</Typography> {letter.remarks}
                                                </li>

                                            ))
                                        }
                                    </ul>
                                </AccordionDetails>
                            </Accordion>



                        </Grid>
                        {letters.map((letter, index) => (
                            <Grid item xs={6} sm={2} md={2} lg={2} key={index} className="speakCardContainer">
                                <SpeakCard text={letter.hangul} lang={'ko'} cardContent={
                                    <>
                                        <Typography variant="h5" align="center" className={"hangulFont"}>{letter.hangul}</Typography>

                                        {showRomanisation && (
                                            <>
                                                <Typography variant="subtitle1" align="center">
                                                    {Array.isArray(letter.romanisation) ? letter.romanisation.join(', ') : letter.romanisation}
                                                </Typography>
                                                <Typography variant="subtitle2" align="center">
                                                    {letter.name && ` ( ${letter.name} )`}
                                                </Typography></>
                                        )}
                                    </>
                                } />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ))}
        </section >
    );
}

export default HangulAlphabet;