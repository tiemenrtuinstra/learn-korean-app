import wordsJson from "./database/words.json";
var hangulRomanization = require("hangul-romanization");

export type Word = {
  hangul: string;
  romanisation?: string;
  dutch: string;
  english?: string;
  source: string;
};

// Ensure that wordsJson is an array of Word objects
let words: Word[] = wordsJson as Word[];

// Map over wordsJson to add romanisation field
words = words.map((word: Word) => ({
  ...word,
  romanisation: hangulRomanization.convert(word.hangul as string),
}));

export default words;
