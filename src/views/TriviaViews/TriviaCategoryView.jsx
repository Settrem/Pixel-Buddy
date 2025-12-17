import '../../styles/App.css';

export function TriviaCategoryView({ categories, onChooseCategoryACB }) {
    return (
        <div className="trivia-grid">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className="cool-btn"
                    onClick={() => onChooseCategoryACB(category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}