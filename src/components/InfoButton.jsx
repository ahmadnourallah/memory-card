import { useState } from 'react';
import { MdOutlineQuestionMark } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import ControlButton from './ControlButton';
import InfoModal from './InfoModal';

function InfoButton() {
    const [active, setActive] = useState();

    return (
        <>
            <ControlButton onClick={() => setActive((prev) => !prev)}>
                {active && <FaTimes className="h-6 w-6" />}
                {!active && <MdOutlineQuestionMark className="h-6 w-6" />}
            </ControlButton>
            <InfoModal active={active} />
        </>
    );
}

export default InfoButton;
