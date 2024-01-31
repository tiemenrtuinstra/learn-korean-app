import words from "./Words";
import alphabet from "./Alphabet";
import { koreanNumbers, sinoKoreanNumbers } from "./Numbers";
import { shuffleArray } from "./helpers";
import { CombinedResourceList } from "./dto/types";

export const combinedResources: CombinedResourceList[] = [
    ...words,
    ...alphabet,
    ...koreanNumbers,
    ...sinoKoreanNumbers,
];

export const shuffleCombinedResources = shuffleArray(combinedResources);
