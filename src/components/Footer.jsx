import VolumeButton from './VolumeButton';
import MusicButton from './MusicButton';
import InfoButton from './InfoButton';

function Footer() {
    return (
        <footer className="fixed right-8 bottom-8 left-8 mr-auto ml-auto flex max-w-[1400px] justify-between">
            <div className="left flex gap-4">
                <VolumeButton />
                <MusicButton />
            </div>

            <div className="right">
                <InfoButton />
            </div>
        </footer>
    );
}

export default Footer;
