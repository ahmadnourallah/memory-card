import { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Footer from './components/Footer';
import InfoBox from './components/InfoBox';
import Switcher from './components/Switcher';
import StartDialog from './components/StartDialog';
import GameContainer from './components/GameContainer';

function App() {
    const [bestScore, setBestScore] = useState(0);

    return (
        <>
            <div className="wrapper font-display relative z-1 mx-auto h-screen max-w-[1400px] p-8 text-3xl">
                <main className="text-white">
                    <Switcher>
                        <StartDialog />
                        <GameContainer
                            bestScore={bestScore}
                            setBestScore={setBestScore}
                        />
                    </Switcher>
                </main>
                <Footer />
            </div>
            <BackgroundVideo />
        </>
    );
}
export default App;
