import wordsJson from "./database/words.json";
var hangulRomanization = require("hangul-romanization");

export type Word = {
  hangul: string;
  romanisation?: string;
  dutch: string;
  source: string;
};

export type WordSource = {
  id: number;
  value: string;
};

// Ensure that wordsJson is an array of Word objects
let words: Word[] = wordsJson as Word[];

// Map over wordsJson to add romanisation field
words = words.map((word: Word) => ({
  ...word,
  romanisation: hangulRomanization.convert(word.hangul as string),
}));

export const wordSources: WordSource[] = words.reduce((unique, item) => {
  if (!unique.some(obj => obj.value === item.source)) {
    unique.push({ id: unique.length, value: item.source });
  }
  return unique;
}, [] as WordSource[]).sort((a, b) => a.value.localeCompare(b.value));
export default words;
