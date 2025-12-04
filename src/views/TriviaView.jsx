import '../styles/App.css';

export function TriviaView(props) {
    
    console.log("6. [View] Rendering with categories:", props.categories);

    return (
        <div>
            <div className="trivia-center">
                <div className="trivia-grid">
                    {props.categories && props.categories.map((category) => (
                        <button
                            key={category.id}
                            className="trivia-question"
                            onClick={() => props.onChooseCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="trivia-text">
                <p>Welcome to Trivia! Please choose a category!</p>
            </div>
        </div>
    );
    function bottomBarText() {
    return (
        // Welcome to Trivia! Please choose category!
        0
    );
}
}