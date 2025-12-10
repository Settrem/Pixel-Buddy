import '../../styles/App.css';

export function TriviaStartView(props) {

    function bottomTextBarACB(message) {
        props.setBottomText(message);
    }

    bottomTextBarACB("Welcome To Trivia. Are you ready? Once you go in there's no coming back..");

    return (
        <div className="trivia-center">
            <div className="trivia-grid">
                <button
                    className="trivia-question"
                    onClick={() => props.triviaStarter()}
                >
                    Start Trivia!
                </button>
            </div>
        </div>
    );
}