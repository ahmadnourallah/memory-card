function DifficultyButton({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer rounded-md bg-[#A1AC82] px-4 py-2 text-lg text-black shadow-lg transition-transform duration-200 hover:scale-110 sm:px-5 sm:py-3 sm:text-2xl"
        >
            {children}
        </button>
    );
}

export default DifficultyButton;
