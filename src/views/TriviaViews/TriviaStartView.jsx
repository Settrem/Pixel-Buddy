import '../../styles/App.css';

export function TriviaStartView(props) {

    function bottomTextBarACB(message) {
        props.setBottomText(message);
    }

    bottomTextBarACB("Welcome To Trivia. Are you ready? Once you go in there's no coming back..");

    return (
        <div>
            <div>
                <button
                    className="cool-btn"
                    onClick={() => props.triviaStartView()}
                >
                    Start Trivia!
                </button>
            </div>
        </div>
    );
}