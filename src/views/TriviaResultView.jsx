import '../styles/App.css';

export function TriviaResultView({ score, total, onRestart }) {
    return (
        <div className="trivia-center">
            <div className="trivia-text">
                <h1>Game Over!</h1>
                <p style={{ fontSize: "1.5em" }}>
                    You scored <strong>{score}</strong> out of <strong>{total}</strong>
                </p>
            </div>
        </div>
    );
}