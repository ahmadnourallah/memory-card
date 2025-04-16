import { motion } from 'motion/react';
import { handleEnter } from '../utils/keyboard';
import ScoreBoard from './ScoreBoard';
import logo from '../assets/logo.png';

function GameHeader({ switchNext, score, bestScore }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="gameHeader align-center flex flex-col justify-center gap-y-8 sm:flex-row sm:justify-between"
        >
            <motion.img
                onKeyDown={handleEnter}
                onClick={() => switchNext()}
                initial={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                tabIndex={0}
                className="h-30 cursor-pointer"
                src={logo}
                alt="Gravity Falls logo"
            />
            <ScoreBoard score={score} bestScore={bestScore} />
        </motion.div>
    );
}

export default GameHeader;
