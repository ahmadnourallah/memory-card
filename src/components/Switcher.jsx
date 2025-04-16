import { cloneElement, useState } from 'react';

function Switcher({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [difficulty, setDifficulty] = useState(null);

    const switchNext = () => {
        const nextIndex =
            activeIndex + 1 > children.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    return (
        <>
            {children.map((child, index) => {
                if (activeIndex === index) {
                    return (
                        <>
                            {cloneElement(child, {
                                switchNext,
                                difficulty,
                                setDifficulty
                            })}
                        </>
                    );
                }
            })}
        </>
    );
}

export default Switcher;
