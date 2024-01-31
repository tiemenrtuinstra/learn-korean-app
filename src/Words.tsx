import { Word, WordSource } from "./dto/types";
import { ResourceType } from "./dto/enums";

import wordsJson from "./database/words.json";
var hangulRomanization = require("hangul-romanization");


// Ensure that wordsJson is an array of Word objects
let words: Word[] = wordsJson as Word[];

// Map over wordsJson to add romanisation field
words = words.map((word: Word) => ({
  ...word,
  romanisation: hangulRomanization.convert(word.hangul as string),
  resource: ResourceType.Word,
}));

//randomize the order of the words
export const randomisedWords = words.sort(() => Math.random() - 0.5);

export const wordSources: WordSource[] = words.reduce((unique, item) => {
  if (!unique.some(obj => obj.value === item.source)) {
    unique.push({ id: unique.length, value: item.source });
  }
  return unique;
}, [] as WordSource[]).sort((a, b) => a.value.localeCompare(b.value));

export default words;
