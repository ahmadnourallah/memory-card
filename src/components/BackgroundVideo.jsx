import bgVideo from '../assets/background.mp4';

function BackgroundVideo() {
    return (
        <div className="fixed top-0 left-0 z-0 h-full overflow-hidden after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[rgb(0,0,0,0.3)]">
            <video className="h-full w-screen object-cover" muted autoPlay loop>
                <source src={bgVideo} type="video/mp4" />
            </video>
        </div>
    );
}

export default BackgroundVideo;
