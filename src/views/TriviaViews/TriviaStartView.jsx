import '../../styles/App.css';

export function TriviaStartView(props) {

    function bottomTextBarACB(message) {
        props.setBottomText(message);
    }

    bottomTextBarACB("Welcome To Trivia. Are you ready? Once you go in there's no coming back..");

    return (
        <div className="trivia-grid">
            <div>
                <button
                    className="trivia-btn"
                    onClick={() => props.triviaStarter()}
                >
                    Start Trivia!
                </button>
            </div>
        </div>
    );
}