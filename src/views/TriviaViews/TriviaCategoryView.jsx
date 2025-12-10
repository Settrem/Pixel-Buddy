import '../../styles/App.css';

export function TriviaCategoryView(props) {

    function bottomTextBarACB(message) {
        props.setBottomText(message);
    }

    bottomTextBarACB("Please choose a category!");
    
    return (
            <div className="trivia-grid">
                    {props.categories.map((category) => (
                        <button
                            key={category.id}
                            className="trivia-btn"
                            onClick={() => props.chooseCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
            </div>
    );
}