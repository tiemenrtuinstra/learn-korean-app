import hangulRomanization from 'hangul-romanization';
import alphabetJson from './database/alphabet.json';

export type Alphabet = {
    hangul: string;
    romanisation?: string;
    letter: string;
};

export type AlphabetListProps = {
    alphabet: Alphabet[];
    page: number;
    rowsPerPage: number;
    handleChangePage: (event: unknown, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// Ensure that alphabetJson is an array of Alphabet objects
let alphabet: Alphabet[] = alphabetJson as Alphabet[];

// Map over alphabetJson to add romanisation fields
alphabet = alphabet.map((letter: Alphabet) => {
    let romanisation;

    if (letter.hangul && typeof letter.hangul === 'string') {
        romanisation = hangulRomanization.convert(letter.hangul);
    }

    return { ...letter, romanisation };
});