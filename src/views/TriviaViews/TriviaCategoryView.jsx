import '../../styles/App.css';
import { PixelButton } from '../../components/ui/PixelButton';

export function TriviaCategoryView({ categories, onChooseCategoryACB }) {
    return (
        <div className="max-h-fill overflow-scroll
            bg-[var(--theme-color)] w-full h-full
            relative p-5 flex flex-col items-center justify-center gap-5
            text-4xl"
            style={{scrollbarWidth: "none", msOverflowStyle: "none", }}
            >
            {categories.map((category) => (
                <PixelButton
                    key={category.id}
                    btnClickCB={() => onChooseCategoryACB(category.id)}
                >
                    {category.name}
                </PixelButton>
            ))}
        </div>
    );
}
