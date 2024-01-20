import words, { Word } from "./Words";
import alphabet, { Alphabet } from "./Alphabet";
import numbers, { KoreanNumber, Number, SinoKoreanNumber, koreanNumbers, sinoKoreanNumbers } from "./Numbers";

export enum ResourceType {
    Word = 'Word',
    Alphabet = 'Alphabet',
    Number = 'Number',
}

export type ResourceWord = Word & { resource: ResourceType.Word };
export type ResourceAlphabet = Alphabet & { resource: ResourceType.Alphabet };
export type ResourceNumber = Number & { resource: ResourceType.Number };
export type ResourceKoreanNumber = KoreanNumber & { resource: ResourceType.Number };
export type ResourceSinoKoreanNumber = SinoKoreanNumber & { resource: ResourceType.Number };
export type CombinedResourceList = ResourceWord | ResourceAlphabet | ResourceKoreanNumber | ResourceSinoKoreanNumber;


function shuffleResource(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const resourceWords: ResourceWord[] = words.map((word: Word) => ({
    ...word,
    resource: ResourceType.Word,
}));
export const shuffleWords = shuffleResource(resourceWords);

export const resourceAlphabet: ResourceAlphabet[] = alphabet.map((alphabet: Alphabet) => ({
    ...alphabet,
    resource: ResourceType.Alphabet,
}));
export const shuffleAlphabet = shuffleResource(resourceAlphabet);

export const resourceKoreanNumbers: ResourceKoreanNumber[] = koreanNumbers.map((number: KoreanNumber) => ({
    ...number,
    resource: ResourceType.Number,
}));
export const shuffleKoreanNumbers = shuffleResource(resourceKoreanNumbers);

export const resourceSinoKoreanNumbers: ResourceSinoKoreanNumber[] = sinoKoreanNumbers.map((number: SinoKoreanNumber) => ({
    ...number,
    resource: ResourceType.Number,
}));
export const shuffleSinoKoreanNumbers = shuffleResource(resourceSinoKoreanNumbers);

export const combinedResources: CombinedResourceList[] = [
    ...resourceWords,
    ...resourceAlphabet,
    ...resourceKoreanNumbers,
    ...resourceKoreanNumbers,
];

export const shuffleCombinedResources = shuffleResource(combinedResources);
