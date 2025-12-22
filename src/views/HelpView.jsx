import { PixelButton } from "../components/ui/PixelButton";
import statusBar from '../../public/assets/statusBar.png';


function HelpView() {
    return <div className="bg-[var(--theme-color)] gap-3 w-full h-full flex flex-col items-center justify-center p-5">
        <div className=" text-5xl">
            Hello! Entrusted in your care is your very own PixelBuddy! But taking care of a PixelBuddy takes a lot of commitment.
            Let's go over a few basics:
        </div>
        <div className="text-3xl text-left">
            
            <div className="border-2 border-black p-1 mb-1">
                Your PixelBuddy has three basic needs: Hunger, Happiness, Energy.
                Use your PixelBuddy's energy to play mini-games to help nurture them.
                To feed your buddy you need to play the Apple Catcher mini-game.
                To keep them happy, you need to play Trivia or let them tell you a joke
                (PixelBuddies love telling jokes).
                <img src={statusBar} className=" mb-1"/>
            </div>
            
            <div className="border-2 border-black p-1 mb-1">
                Playing the activities will deplete your energy, and not interacting with your Buddy will
                deplete their Hunger and Happiness.
                By stepping away from the game for a while, the PixelBuddy will recover energy over time.
                Be careful! If your PixelBuddy has no happiness, it will refuse to change clothes.
                If their Hunger depletes fully, they will die. 
            </div>
            <div className="border-2 border-black p-1">
                Use the Settings icon in the top right corner to change the the theme, and to choose a new name for your PixelBuddy!
            </div>
        </div >
        <div className="w-max text-4xl">
            <PixelButton btnClickCB={() => window.location.hash = "/buddy"}>
                Back to Buddy
            </PixelButton>
        </div>
    </div >;
}

export { HelpView }