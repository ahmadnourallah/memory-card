import { useState } from 'react';
import Game from './Game';
import Modal from './Modal';

function GameContainer({ switchNext, difficulty, bestScore, setBestScore }) {
    const [key, setKey] = useState(0);
    const [hasWon, setHasWon] = useState(false);
    const [hasLost, setHasLost] = useState(false);

    return (
        <>
            <Game
                key={key}
                switchNext={switchNext}
                difficulty={difficulty}
                setHasLost={setHasLost}
                setHasWon={setHasWon}
                bestScore={bestScore}
                setBestScore={setBestScore}
            />
            {hasLost && (
                <Modal
                    hasWon={false}
                    onClick={() => {
                        setKey(Math.random());
                        setHasLost(false);
                    }}
                />
            )}

            {hasWon && (
                <Modal
                    hasWon={true}
                    onClick={() => {
                        setKey(Math.random());
                        setHasWon(false);
                    }}
                />
            )}
        </>
    );
}

export default GameContainer;
