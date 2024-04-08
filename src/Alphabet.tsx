import { Alphabet, } from './dto/types';
import { AlphabetType, ResourceType } from './dto/enums';
import alphabetJson from './database/alphabet.json';

export const alphabetTypeExplanations = {
  [AlphabetType.Klinker]: `In het moderne hangeul zijn er technisch gezien 10 klinkers. Dat zijn de eerste 10 letters die je tegenkomt in de
  tabel. Maar je ziet dat er nog 4 klinkers staan. Officieel worden deze klinkers gezien als een combinatie van twee
  klinkers, maar je gebruikt ze gewoon als één Klinker.`,
  [AlphabetType.DubbeleKlinker]: `Net zoals in het Nederlands heb je in het Koreaans ook lettergrepen waarbij er 2 klinkers na elkaar komen.
  Wanneer je deze klinkers samenvoegt, dan krijgen deze een iets andere uitspraak. Deze twee klinkers zijn altijd een
  combinatie van een liggende en een staande Klinker. Als je deze beide klinkers snel achter elkaar uitspreekt, krijg
  je vanzelf de klank die je moet krijgen, namelijk een ‘w’ klank. Laten we kijken in de tabel hieronder hoe dat er uit
  komt te zien.`,
  [AlphabetType.Medeklinker]: `Het hangeul heeft in totaal 14 medeklinkers. De medeklinkers kunnen worden opgesplitst in verschillende
  categorieën en vervolgens weer in subcategorieën. Zo worden de medeklinkers niet alleen verdeeld op basis
  van waar in je mond het geluid vandaan komt, maar ook op hoeveel lucht bij de klank komt of de intensiteit van
  de uitspraak. Zo krijg je de simpele medeklinkers, de aspiratie medeklinkers en de spanning medeklinkers. De
  onderverdeling hiervan is niet belangrijk voor het leren van de letters, maar mocht je er meer over willen weten,
  dan staat er wat extra informatie bij de fun facts.`,
  [AlphabetType.AspiratieMedeklinker]: `Deze medeklinkers worden officieel aspiratie medeklinkers genoemd. Aspiratie betekent dat er lucht bij de
  uitgesproken klanken wordt toegevoegd. Om te zien of een Klinker een Aspiratie Medeklinker is, kan je je hand
  voor je mond houden. Bij het uitspreken van een Aspiratie Medeklinker voel je een luchtstroom tegen je hand aan,
  terwijl een simpele Klinker dit niet zal hebben.`,
  [AlphabetType.GespannenMedeKlinker]: `Deze medeklinkers worden ook wel de gespannen medeklinkers genoemd. Dit zijn de medeklinkers waarbij de
  klank met nadruk of spanning wordt uitgesproken. Deze medeklinkers worden gezien als extra. De beginletters van
  Nederlandse woorden worden vaak uitgesproken met deze spanning klinkers, zoals het woord kaas of de naam
  Peter.`
};

// Ensure that alphabetJson is an array of Alphabet objects
let alphabet: Alphabet[] = alphabetJson as Alphabet[];

alphabet = alphabet.map(a => ({
  ...a,
  type: AlphabetType[a.type as unknown as keyof typeof AlphabetType] || a.type,
  resource: ResourceType.Alphabet,
}));

export default alphabet;