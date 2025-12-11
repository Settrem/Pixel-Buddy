import '../../styles/App.css';

export function ApplesStartView(props) {

    function bottomTextBarACB(message) {
        props.setBottomText(message);
    }

    bottomTextBarACB("PixelBuddies also need to eat! Help (name) catch as many apples as possible.");
    return (
        <div>
            <div>
                <button
                    className="cool-btn"
                    onClick={() => props.applesStarter()}
                >
                    Start Apple Catcher!
                </button>
            </div>
        </div>
    )
}
