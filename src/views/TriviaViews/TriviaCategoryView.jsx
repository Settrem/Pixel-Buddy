import '../../styles/App.css';

export function TriviaCategoryView(props) {

    function bottomTextBarACB(message) {
        props.setBottomText(message);
    }

    bottomTextBarACB("Please choose a category!");
    
    return (
        <div>
            <div className="trivia-center">
                <div className="trivia-grid">
                    {props.categories.map((category) => (
                        <button
                            key={category.id}
                            className="trivia-question"
                            onClick={() => props.chooseCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}