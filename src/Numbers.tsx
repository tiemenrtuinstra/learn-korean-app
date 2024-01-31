import { Number, KoreanNumber, SinoKoreanNumber } from './dto/types';
import { NumberType, ResourceType } from './dto/enums';
import numbersJson from "./database/numbers.json";
var hangulRomanization = require("hangul-romanization");

let numbers: Number[] = numbersJson as Number[];

numbers = numbers.map((number: Number) => ({
  ...number,
  korean: number.korean,
  koreanRomanisation: number.korean ? hangulRomanization.convert(number.korean as string) : '',
  sinoKoreanRomanisation: number.korean ? hangulRomanization.convert(number.sinoKorean as string) : '',
}));

export const koreanNumbers: KoreanNumber[] = numbers
  .filter((number: Number) => number.korean)
  .map((number: Number) => ({
    number: number.number,
    hangul: number.korean as string,
    romanisation: number.korean ? hangulRomanization.convert(number.korean as string) : '',
    type: NumberType.Korean,
    resource: ResourceType.Number,
  }));

export const sinoKoreanNumbers: SinoKoreanNumber[] = numbers.map((number: Number) => ({
  number: number.number,
  hangul: number.sinoKorean,
  romanisation: number.sinoKorean ? hangulRomanization.convert(number.sinoKorean as string) : '',
  type: NumberType.SinoKorean,
  resource: ResourceType.Number,
}));

export default numbers;