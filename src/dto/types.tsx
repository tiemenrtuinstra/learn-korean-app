import { ReactNode } from "react";
import { AlphabetType, NumberType, ResourceType } from "./enums";

export type Number = {
  number: number;
  korean: string;
  koreanRomanisation?: string;
  sinoKorean: string;
  sinoKoreanRomanisation?: string;
};

export type NumbersListProps = NumberListProps & {
  numberSystem: 'korean' | 'sino-korean';
};

export type KoreanNumber = {
  number: number;
  hangul: string;
  romanisation: string;
  type: NumberType.Korean;
  resource: ResourceType.Number;
};

export type SinoKoreanNumber = {
  number: number;
  hangul: string;
  romanisation: string;
  type: NumberType.SinoKorean;
  resource: ResourceType.Number;
};

export type NumberListProps = {
  numbers: Number[];
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Word = {
  hangul: string;
  romanisation?: string;
  dutch: string;
  source: string;
  resource: ResourceType.Word;
};

export type WordSource = {
  id: number;
  value: string;
};

export type Alphabet = {
  hangul: string;
  romanisation: string;
  type: AlphabetType;
  name?: string;
  remarks?: string;
  resource: ResourceType.Alphabet;
};

export type AlphabetListProps = {
  alphabet: Alphabet[];
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// Define the type for a cheat code
export type CheatCode = {
  exercise: string;
  code: string;
};

export type CombinedResourceList = Word | Alphabet | KoreanNumber | SinoKoreanNumber;

export type RouteOption = {
  path: string;
  title: string;
  element: ReactNode;
  inBottomNav?: boolean;
  inDrawer?: boolean;
  isExercise?: boolean;
  isSetting?: boolean;
  icon: ReactNode;
  enabled: boolean;
};