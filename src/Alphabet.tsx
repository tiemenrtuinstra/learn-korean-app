import alphabetJson from './database/alphabet.json';

export enum AlphabetType {
  Klinker = "klinkers",
  DubbeleKlinker = "dubbele klinkers",
  medeklinker = "medeklinker",
  OpgezogenMedeklinkers = "opgezogen medeklinkers",
  GespannenMedeklinkers = "gespannen medeklinkers",
};

export type Alphabet = {
  hangul: string;
  romanisation: string;
  type: AlphabetType;
  remarks?: string;
};

export const alphabetTypeExplanations = {
  [AlphabetType.Klinker]: 'Klinkers zijn de letters die je uitspreekt met je mond open. In het Koreaans zijn er 10 klinkers.',
  [AlphabetType.DubbeleKlinker]: 'Dubbele klinkers zijn klinkers die je uitspreekt met je mond open, maar die je langer uitspreekt dan normale klinkers. In het Koreaans zijn er 11 dubbele klinkers.',
  [AlphabetType.medeklinker]: 'Medeklinkers zijn de letters die je uitspreekt met je mond dicht. In het Koreaans zijn er 14 medeklinkers.',
  [AlphabetType.OpgezogenMedeklinkers]: 'Opgezogen medeklinkers zijn medeklinkers die je uitspreekt met je mond dicht, maar die je langer uitspreekt dan normale medeklinkers. In het Koreaans zijn er 5 opgezogen medeklinkers.',
  [AlphabetType.GespannenMedeklinkers]: 'Gespannen medeklinkers zijn medeklinkers die je uitspreekt met je mond dicht, maar die je met meer spanning uitspreekt dan normale medeklinkers. In het Koreaans zijn er 5 gespannen medeklinkers.',
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

alphabet = alphabet.map(a => ({
  ...a,
  type: AlphabetType[a.type as keyof typeof AlphabetType] || a.type
}));




export default alphabet;