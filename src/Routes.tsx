import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import Introduction from './pages/Introduction';
import HangulAlphabet from './pages/HangulAlphabet';
import WordList from './pages/WordList';
import WordCards from './pages/WordCards';
import Colofon from './pages/Colofon';
import NumberList from './pages/NumberList';
import MultipleChoice from './Excercises/MultipleChoice';
import MemoryGame from './Excercises/MemoryGame';
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
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { RouteOption } from './dto/types';
import ResetCheatModeOnRouteChange from './hooks/ResetCheatModeOnRouteChange';

const FinishedPageWrapper: React.FC = () => {
    const { score, correctAnswers, wrongAnswers, cheatMode } = useParams();
    return <FinishedPage score={Number(score)} correctAnswers={Number(correctAnswers)} wrongAnswers={Number(wrongAnswers)} cheatMode={Boolean(cheatMode)} />;
};

const excerciseRoutes: RouteOption[] = [
    { path: "/multiple-choice", title: "Multiple Choice", element: <MultipleChoice />, inBottomNav: false, inDrawer: false, isExercise: true, icon: <MultipleChoiceIcon />, enabled: true },
    { path: "/memory", title: "Memory", element: <MemoryGame />, inBottomNav: false, inDrawer: false, isExercise: true, icon: <MultipleChoiceIcon />, enabled: true },
    { path: "/schrijven", title: "Writing Exercise", element: <WritingExercise />, inBottomNav: false, inDrawer: false, isExercise: true, icon: <WritingIcon />, enabled: true },
    { path: "/spreken", title: "Speaking Exercise", element: <SpeakingExercise />, inBottomNav: false, inDrawer: false, isExercise: true, icon: <SpeakingIcon />, enabled: true },
    { path: "/invullen", title: "Fill in The Blanks", element: <FillInTheBlanks />, inBottomNav: false, inDrawer: false, isExercise: true, icon: <FillIcon />, enabled: true },
];

const settingsRoutes: RouteOption[] = [
    { path: "/colofon", title: "Colofon", element: <Colofon />, isSetting: true, icon: <InfoIcon />, enabled: true },
];

export const getRoutesOptions = (showRomanisation: boolean, setShowRomanisation: any):RouteOption[] => [
    { path: "/", title: "Introduction", element: <Introduction />, inBottomNav: false, inDrawer: false, isExercise: false, icon: <HomeIcon />, enabled: true },
    { path: "/Alfabet", title: "Alfabet", element: <HangulAlphabet showRomanisation={showRomanisation}/>, inBottomNav: true, inDrawer: false, isExercise: false, icon: <HangulIcon />, enabled: true },
    { path: "/woorden-lijst", title: "Woordenlijst", element: <WordList showRomanisation={showRomanisation} setShowRomanisation={setShowRomanisation}/>, inBottomNav: true, inDrawer: false, isExercise: false, icon: <ListIcon />, enabled: true },
    { path: "/woorden-kaarten", title: "Flashcards", element: <WordCards showRomanisation={showRomanisation} setShowRomanisation={setShowRomanisation}/>, inBottomNav: true, inDrawer: false, isExercise: false, icon: <StyleIcon />, enabled: true },
    { path: "/nummers", title: "Nummers", element: <NumberList showRomanisation={showRomanisation}/>, inBottomNav: true, inDrawer: false, isExercise: false, icon: <PinIcon />, enabled: true },
    { path: "/vertaler", title: "Vertalen", element: <Translator />, inBottomNav: true, inDrawer: false, isExercise: false, icon: <TranslateIcon />, enabled: false },
    { path: "/oefeningen", title: "oefeningen", element: <Exercise showRomanisation={showRomanisation} setShowRomanisation={setShowRomanisation}/>, inBottomNav: true, inDrawer: false, isExercise: false, icon: <ExerciseIcon />, enabled: true },
    ...excerciseRoutes,
    { path: "/finished/:score/:correctAnswers/:wrongAnswers/:cheatMode", title: "Uitslag", element: <FinishedPageWrapper />, inBottomNav: false, inDrawer: false, isExercise: false, icon: <FinishedIcon />, enabled: true },
    ...settingsRoutes,
].map((route: RouteOption) => {
    route.inBottomNav = route.inBottomNav ?? false;
    route.inDrawer = route.inDrawer ?? false;
    route.isExercise = route.isExercise ?? false;
    route.isSetting = route.isSetting ?? false;
    return route;
})
    .filter(route => route.enabled);

export default getRoutesOptions;

export const RoutesWrapper: React.FC<{ showRomanisation: boolean, setShowRomanisation: React.Dispatch<React.SetStateAction<boolean>> }> = ({ showRomanisation, setShowRomanisation }) => {
    const RoutesOptions = getRoutesOptions(showRomanisation, setShowRomanisation);
    return (<>
        <ResetCheatModeOnRouteChange />
        <Routes>
            {RoutesOptions.filter((route: { enabled: boolean; }) => route.enabled).map((route: RouteOption) => (
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
    </>
    );
}

export function isAnyRouteInDrawerEnabled(showRomanisation: boolean ,setShowRomanisation: any): boolean {
    return getRoutesOptions(showRomanisation,setShowRomanisation).some((route: RouteOption) => route.inDrawer);
}