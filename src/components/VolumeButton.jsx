import { FaVolumeUp } from 'react-icons/fa';
import { FaVolumeMute } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ControlButton from './ControlButton';
import clickSound from '../assets/click.mp3';

function VolumeButton() {
    const [active, setActive] = useState();

    useEffect(() => {
        const playAudio = () => {
            const click = new Audio(clickSound);
            click.volume = 0.07;
            click.play();
        };

        if (active) {
            window.addEventListener('click', playAudio);
        }

        return () => {
            window.removeEventListener('click', playAudio);
        };
    }, [active]);

    return (
        <ControlButton onClick={() => setActive((prev) => !prev)}>
            {active && <FaVolumeUp className="h-6 w-6" />}
            {!active && <FaVolumeMute className="h-6 w-6" />}
        </ControlButton>
    );
}

export default VolumeButton;
