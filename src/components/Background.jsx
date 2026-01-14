import bgImage from '../assets/background.webp';

function Background() {
    return (
        <div className="fixed top-0 left-0 z-0 h-full overflow-hidden after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[rgb(0,0,0,0.3)]">
            <img src={bgImage} className="h-full w-screen object-cover" />
        </div>
    );
}

export default Background;
