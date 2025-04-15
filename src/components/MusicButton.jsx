import { useState, useEffect, lazy } from 'react';
import { MdMusicOff } from 'react-icons/md';
import { MdMusicNote } from 'react-icons/md';
import ControlButton from './ControlButton';
import bgMusic from '../assets/background_music.mp3';

function MusicButton() {
    const [active, setActive] = useState();
    const audio = new Audio(bgMusic);
    audio.volume = 0.07;
    audio.loop = true;

    useEffect(() => {
        if (active) {
            audio.play();
        }

        return () => {
            audio.pause();
        };
    }, [active]);

    return (
        <ControlButton onClick={() => setActive((prev) => !prev)}>
            {active && <MdMusicNote className="h-6 w-6" />}
            {!active && <MdMusicOff className="h-6 w-6" />}
        </ControlButton>
    );
}

export default MusicButton;
