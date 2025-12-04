import '../styles/App.css'

export function TriviaView() {

    const buttons = Array(4).fill("Welcome to Trivia! Please choose category!");

    return (
        <div>
            <div className="trivia-center">
                <div className="trivia-grid">
                    {buttons.map((text, i) => (
                        <button key={i} className="trivia-question">
                            {text}
                        </button>
                    ))}
                </div>

                <input />
            </div>
        </div>
    );
}

function bottomBarText() {
    return (
        // Welcome to Trivia! Please choose category!
        0
    );
}