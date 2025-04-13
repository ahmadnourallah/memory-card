function InfoBox({ children }) {
    return (
        <div className="rounded-lg bg-[#17233E] p-4 text-center font-bold text-white shadow-[0_0_8px_#424242,0_0_8px_#424242]">
            {children}
        </div>
    );
}

export default InfoBox;
