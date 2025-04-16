import { motion } from 'motion/react';
import logo from '../assets/logo.png';
import DifficultyButton from './DifficultyButton';

function StartDialog({ switchNext, setDifficulty }) {
    const startGame = (difficulty) => {
        setDifficulty(difficulty);
        switchNext();
    };

    return (
        <motion.div
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1)' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-12"
        >
            <img src={logo} alt="Gravity Falls logo" />
            <h1
                className="text-center text-6xl font-bold text-[#A1AC82]"
                style={{
                    textShadow:
                        '-.06em 0 .08em #000,.06em 0 .08em #000,0 .06em .08em #000,0 -.06em .08em #000,-.06em .06em .08em #000,.06em .06em .08em #000,-.06em -.06em .08em #000,.06em -.06em .08em #000'
                }}
            >
                Memory Game
            </h1>
            <div className="difficultyLevels flex flex-wrap justify-center gap-4">
                <DifficultyButton onClick={() => startGame(0)}>
                    Easy
                </DifficultyButton>
                <DifficultyButton onClick={() => startGame(1)}>
                    Medium
                </DifficultyButton>
                <DifficultyButton onClick={() => startGame(2)}>
                    Hard
                </DifficultyButton>
            </div>
        </motion.div>
    );
}

export default StartDialog;
