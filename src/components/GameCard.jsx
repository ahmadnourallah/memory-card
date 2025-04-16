import { motion } from 'motion/react';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { handleEnter } from '../utils/keyboard';
import cardBackground from '../assets/card_background.jpg';

function GameCard({ character, characterId, isOpen, onClick }) {
    const queryClient = useQueryClient();
    const isFirstRender = useRef(true);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [characterImage, setCharacterImage] = useState(null);
    const [characterName, setCharacterName] = useState(character);
    const [shadow, setShadow] = useState(0);
    const cardRef = useRef();

    const { data } = useQuery({
        queryKey: ['character', characterId],
        queryFn: async () => {
            const response = await fetch(
                `https://api.disneyapi.dev/character/${characterId}`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });

    useEffect(() => {
        if (isFirstRender.current) {
            setCharacterImage(data?.data?.imageUrl);
            isFirstRender.current = false;
        }

        // Delay updating character's name and image till card flips open
        if (isOpen && data) {
            setTimeout(() => {
                setCharacterName(character);
                setCharacterImage(data?.data?.imageUrl);
            }, 50);
        }
    }, [data, isOpen, character]);

    const tiltCard = (e) => {
        const width = cardRef.current.offsetWidth / 2;
        const height = cardRef.current.offsetHeight / 2;
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        const factor = 15;

        setRotate({
            x: x > width ? x / factor : ((width - x) / factor) * -1,
            y: y > height ? y / factor : ((height - y) / factor) * -1
        });
    };

    const updateShadow = (e) => {
        const height = cardRef.current.offsetHeight / 2;
        const y = e.nativeEvent.offsetY;

        if (y > height) setShadow(y / (height * 5));
        else setShadow(0);
    };

    return (
        <div className="gameCard perspective-midrange">
            <motion.div
                whileHover={{
                    rotateX: `${rotate.y}deg`,
                    rotateY: `${rotate.x}deg`,
                    transition: { duration: 0.2 }
                }}
                ref={cardRef}
                onMouseMove={tiltCard}
                className="cardTilt will-change-transform"
            >
                <motion.div
                    style={{
                        backgroundImage: `url(${cardBackground})`
                    }}
                    animate={{
                        rotateY: isOpen ? 0 : '180deg',
                        transition: { duration: 0.2 }
                    }}
                    onClick={(e) => {
                        onClick(e);
                    }}
                    onKeyDown={handleEnter}
                    tabIndex={0}
                    role="button"
                    className="cardFlip relative h-80 w-52 cursor-pointer rounded-2xl bg-cover bg-no-repeat p-2 text-center will-change-transform transform-3d"
                >
                    <motion.div
                        className="cardShadow absolute top-0 left-0 z-100 h-full w-full rounded-2xl"
                        initial={{ boxShadow: 0 }}
                        transition={{ duration: 0.1 }}
                        whileHover={{
                            boxShadow: `inset 0px -191px 150px -30px rgba(230,230,230,${shadow})`
                        }}
                        onMouseMove={updateShadow}
                    ></motion.div>

                    <motion.div className="cardFace absolute top-1 right-1 bottom-1 left-1 backface-hidden">
                        <div
                            className="characterHolder h-10/11 w-full rounded-2xl bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${characterImage})`
                            }}
                        ></div>

                        <div className="characterName pointer-events-none text-2xl">
                            {characterName}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default GameCard;
