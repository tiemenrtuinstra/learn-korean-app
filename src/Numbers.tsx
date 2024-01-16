import numbersJson from "./database/numbers.json";
var hangulRomanization = require("hangul-romanization");

export type Number = {
  number: number;
  korean: string;
  koreanRomanisation?: string;
  sinoKorean: string;
  sinoKoreanRomanisation?: string;
};

export type NumberListProps = {
    numbers: Number[];
    page: number;
    rowsPerPage: number;
    handleChangePage: (event: unknown, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// Ensure that numbersJson is an array of Number objects
let numbers: Number[] = numbersJson as Number[];

// Map over numbersJson to add romanisation fields
numbers = numbers.map((number: Number) => {
  let koreanRomanisation, sinoKoreanRomanisation;

  if (number.korean && typeof number.korean === 'string') {
    koreanRomanisation = hangulRomanization.convert(number.korean);
  }

  if (number.sinoKorean && typeof number.sinoKorean === 'string') {
    sinoKoreanRomanisation = hangulRomanization.convert(number.sinoKorean);
  }

  return {
    ...number,
    koreanRomanisation,
    sinoKoreanRomanisation,
  };
});

export default numbers;