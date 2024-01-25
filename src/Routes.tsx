import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import Introduction from './pages/Introduction';
import HangulAlphabet from './pages/HangulAlphabet';
import WordList from './pages/WordList';
import WordCards from './pages/WordCards';
import NumberList from './pages/NumberList';
import MultipleChoice from './Excercises/MultipleChoice';
import Exercise from './Excercises/Exercise';
import WritingExercise from './Excercises/WritingExercise';
import SpeakingExercise from './Excercises/SpeakingExercise';
import FillInTheBlanks from './Excercises/FillInTheBlanks';
import Translator from './pages/Translator';
import FinishedPage from './Excercises/FinishedPage';
import HangulIcon from './assets/HangulIcon';

import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import TranslateIcon from '@mui/icons-material/Translate';
import ExerciseIcon from '@mui/icons-material/FitnessCenter';
import MultipleChoiceIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import WritingIcon from '@mui/icons-material/Create';
import SpeakingIcon from '@mui/icons-material/Mic';
import PinIcon from '@mui/icons-material/PinOutlined';
import FillIcon from '@mui/icons-material/FormatColorFill';
import FinishedIcon from '@mui/icons-material/CheckCircleOutline';
import StyleIcon from '@mui/icons-material/StyleOutlined';

export type RouteOption = {
    path: string;
    title: string;
    element: ReactNode;
    inBottomNav: boolean;
    inDrawer: boolean;
    isExercise: boolean;
    icon: ReactNode;
    enabled: boolean;
};

const FinishedPageWrapper: React.FC = () => {
    const { score, correctAnswers, wrongAnswers, cheatMode } = useParams();
    return <FinishedPage score={Number(score)} correctAnswers={Number(correctAnswers)} wrongAnswers={Number(wrongAnswers)} cheatMode={Boolean(cheatMode)} />;
};

export const RoutesOptions: RouteOption[] = [
    { path: "/", title: "Introduction", element: <Introduction />, inBottomNav: false, inDrawer: false, isExercise: false, icon: <HomeIcon />, enabled: true },
    { path: "/Alfabet", title: "Alfabet", element: <HangulAlphabet />, inBottomNav: true, inDrawer: false, isExercise: false, icon: <HangulIcon />, enabled: true },
    { path: "/woorden-lijst", title: "Woordenlijst", element: <WordList />, inBottomNav: true, inDrawer: false, isExercise: false, icon: <ListIcon />, enabled: true },
    { path: "/woorden-kaarten", title: "Flashcards", element: <WordCards />, inBottomNav: true, inDrawer: false, isExercise: false, icon: <StyleIcon />, enabled: true },
    { path: "/nummers", title: "Nummers", element: <NumberList />, inBottomNav: true, inDrawer: false, isExercise: false, icon: <PinIcon />, enabled: true },
    { path: "/vertaler", title: "Vertalen", element: <Translator />, inBottomNav: true, inDrawer: false, isExercise: false, icon: <TranslateIcon />, enabled: true },
    { path: "/oefeningen", title: "oefeningen", element: <Exercise />, inBottomNav: true, inDrawer: false, isExercise: false, icon: <ExerciseIcon />, enabled: true },
    { path: "/multiple-choice", title: "Multiple Choice", element: <MultipleChoice />, inBottomNav: false, inDrawer: false, isExercise: true, icon: <MultipleChoiceIcon />, enabled: true },
    { path: "/schrijven", title: "Writing Exercise", element: <WritingExercise />, inBottomNav: false, inDrawer: false, isExercise: true, icon: <WritingIcon />, enabled: true },
    { path: "/spreken", title: "Speaking Exercise", element: <SpeakingExercise />, inBottomNav: false, inDrawer: false, isExercise: true, icon: <SpeakingIcon />, enabled: true },
    { path: "/invullen", title: "Fill in The Blanks", element: <FillInTheBlanks />, inBottomNav: false, inDrawer: false, isExercise: true, icon: <FillIcon />, enabled: true },
    { path: "/finished/:score/:correctAnswers/:wrongAnswers/:cheatMode", title: "Uitslag", element: <FinishedPageWrapper />, inBottomNav: false, inDrawer: false, isExercise: false, icon: <FinishedIcon />, enabled: true },
].filter(route => route.enabled);

export default RoutesOptions;

export function isAnyRouteInDrawerEnabled(): boolean {
    return RoutesOptions.some(route => route.inDrawer);
}