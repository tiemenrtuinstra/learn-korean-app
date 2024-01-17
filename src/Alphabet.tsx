import alphabetJson from './database/alphabet.json';

export type Alphabet = {
    hangul: string;
    romanisation: string;
    type: string;
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

export default alphabet;