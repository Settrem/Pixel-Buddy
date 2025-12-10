import '../../styles/App.css';

export function TriviaResultView({ score, total, onRestart }) {
    return (
        <div>
            <div className="trivia-center" style={{ fontSize: "3em" }}>
                <h1>Game Over!</h1>
                <p>
                    You scored <strong>{score}</strong> out of <strong>{total}</strong>
                </p>
            </div>
        </div>
    );
}