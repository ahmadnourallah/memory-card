import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { shuffle } from '../utils/array';
import GameHeader from './GameHeader';
import GameCard from './GameCard';
import flipSound from '../assets/flip.mp3';

const allCharacters = {
    Dipper: 5313,
    Ford: 5314,
    Gideon: 3908,
    Stan: 5317,
    Wendy: 1471,
    Bill: 641,
    Robbie: 7045,
    Mabel: 5315,
    Soos: 5601,
    Waddles: 7157
};

function Game({
    switchNext,
    difficulty,
    setHasLost,
    setHasWon,
    bestScore,
    setBestScore
}) {
    const isFirstRender = useRef(true);
    const totalTurns =
        (difficulty === 0 && 5) ||
        (difficulty === 1 && 7) ||
        (difficulty === 2 && 10);
    const [isOpen, setIsOpen] = useState(true);
    const [turn, setTurn] = useState(0);
    const [score, setScore] = useState(0);

    const [clickedCharacters, setClickedCharacters] = useState([]);

    const getTurnCharacters = () =>
        shuffle(Object.entries(allCharacters)).slice(0, difficulty + 3);

    const [turnCharacters, setTurnCharacters] = useState(getTurnCharacters());

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const flip = new Audio(flipSound);
        flip.volume = 0.7;
        flip.play();
    }, [isOpen]);

    const checkWinOrLoss = (character) => {
        if (clickedCharacters.find((char) => char === character)) {
            setHasLost(true);
            return false;
        } else if (turn + 1 === totalTurns) {
            setHasWon(true);
            return true;
        }

        return null;
    };

    const updateScores = () => {
        setScore(score + 1);
        setBestScore(score + 1 > bestScore ? score + 1 : bestScore);
    };

    const updateTurn = () => {
        setTurn((prev) => prev + 1);
    };

    const flipCards = () => {
        if (clickedCharacters) setIsOpen((prev) => !prev);
        if (isOpen) setTimeout(() => setIsOpen(true), 600);
    };

    const updateCharacters = (character) => {
        setClickedCharacters((prev) => [...prev, character]);
        setTurnCharacters(getTurnCharacters());
    };

    const handleTurn = (character) => {
        const status = checkWinOrLoss(character);

        if (status === true || status === null) updateScores();
        if (status === null) {
            updateTurn();
            flipCards();
            updateCharacters(character);
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <GameHeader
                score={score}
                bestScore={bestScore}
                switchNext={switchNext}
            />

            <motion.div
                initial={{ transform: 'scale(0)' }}
                animate={{ transform: 'scale(1)' }}
                className="gameSection mb-18 flex flex-col items-center justify-center gap-4 sm:my-0"
            >
                <div className="cardContainer flex flex-wrap justify-center gap-8 perspective-midrange">
                    {turnCharacters.map((character) => {
                        return (
                            <GameCard
                                onClick={() => {
                                    // Prevent clicking when cards are closed
                                    if (isOpen) handleTurn(character[0]);
                                }}
                                isOpen={isOpen}
                                character={character[0]}
                                characterId={character[1]}
                            />
                        );
                    })}
                </div>
                <div className="turns text-center text-2xl">
                    {turn} / {totalTurns}
                </div>
            </motion.div>
        </div>
    );
}

export default Game;
