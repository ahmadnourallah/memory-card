function ControlButton({ onClick, children }) {
    return (
        <button
            onClick={onClick}
            className="relative flex cursor-pointer items-center justify-center rounded-full bg-[#A86A25] p-3 transition-transform duration-200 hover:scale-105"
        >
            {children}
        </button>
    );
}

export default ControlButton;
