function ScoreBoard({ score, bestScore }) {
    return (
        <div
            style={{ boxShadow: '0 5px 15px #424242,0 -5px 15px #424242' }}
            className="scoreBoard flex h-max flex-col gap-2 rounded-2xl bg-[#17233E] p-4 text-2xl"
        >
            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    );
}

export default ScoreBoard;
