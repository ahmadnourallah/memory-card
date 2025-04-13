import InfoBox from './InfoBox';
import mabelInfo from '../assets/mabel_info.png';

function InfoModal({ active }) {
    return (
        <div
            className={`infoModal absolute right-16 -bottom-8 flex flex-col items-end transition-[translate,opacity] duration-300 ${active ? 'translate-y-0 opacity-100' : 'translate-y-[200%] opacity-0'}`}
        >
            <div className="infoBoxes absolute right-[calc(100%+5px)] bottom-20 flex w-full flex-col gap-4 max-[450px]:static lg:w-max">
                <InfoBox>Don't click on the same card twice!</InfoBox>
                <InfoBox>Click on GRAVITY FALLS logo to go back.</InfoBox>
            </div>
            <img className="w-40" src={mabelInfo} alt="" />
        </div>
    );
}

export default InfoModal;
