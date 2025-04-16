import { motion } from 'motion/react';
import lostBg from '../assets/losing_background.jpg';
import wonBg from '../assets/winning_background.avif';

function Modal({ hasWon, onClick }) {
    return (
        <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="modal fixed top-0 left-0 z-100 flex h-screen w-screen items-center justify-center bg-[rgb(0,0,0,0.5)]"
        >
            <div
                style={{
                    backgroundImage: `url(${hasWon ? wonBg : lostBg})`,
                    boxShadow: `0 5px 20px ${hasWon ? '#113661' : '#611111'},0 -5px 20px #611111`
                }}
                className="content flex h-3/4 w-3/5 flex-col items-center justify-between rounded-2xl bg-cover bg-center bg-no-repeat p-4"
            >
                <div
                    style={{
                        backgroundColor: hasWon ? '#3268A5' : '#AF0F0F'
                    }}
                    className="label rounded-2xl px-8 py-4 text-4xl"
                >
                    {hasWon ? 'You win!' : 'You lose!'}
                </div>
                <motion.button
                    whileHover={{
                        scale: 1.1
                    }}
                    className="cursor-pointer rounded-3xl bg-[#EFEFEF] px-6 py-3 text-2xl text-black"
                    onClick={onClick}
                >
                    Restart
                </motion.button>
            </div>
        </motion.div>
    );
}

export default Modal;
