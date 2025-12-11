//TODO
/**
 * Pass through the BottomTextBar to make recieving points reactive based on score
 */

import '../../styles/App.css';

export function TriviaResultView( {score, total }) {

        //function bottomTextBarACB(message) {
        //props.setBottomText(message);
    //}

    //bottomTextBarACB("Nice Work! (buddy) earned (amount) happiness!");

    return (
        <div className="trivia-grid trivia-text">
            <h1>Game Over!</h1>
            <p>
                You scored {score} out of {total}
            </p>
            <div>
                <button
                    className="cool-btn"
                    onClick={() => props.triviaStart()}
                >
                    Back To Buddy!
                </button>
            </div>
        </div>
    );
}

