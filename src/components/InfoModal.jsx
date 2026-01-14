import { motion } from 'motion/react';
import InfoBox from './InfoBox';
import mabelInfo from '../assets/mabel_info.webp';

function InfoModal({ active }) {
    return (
        <motion.div
            animate={{
                opacity: active ? 1 : 0,
                translateY: active ? 0 : '200%',
                transition: { duration: 0.2 }
            }}
            className="infoModal absolute right-16 -bottom-8 flex flex-col items-end"
        >
            <div className="infoBoxes absolute right-[calc(100%+5px)] bottom-20 flex w-full flex-col gap-4 max-[450px]:static lg:w-max">
                <InfoBox>Don't click on the same card twice!</InfoBox>
                <InfoBox>Click on GRAVITY FALLS logo to go back.</InfoBox>
            </div>
            <img className="w-40" src={mabelInfo} alt="" />
        </motion.div>
    );
}

export default InfoModal;
