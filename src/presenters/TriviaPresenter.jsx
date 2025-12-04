import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { TriviaView } from "../views/TriviaView";
import { getCategories } from "../TriviaSource";

const Trivia = observer(
    function Trivia({ model }) {
        const [categories, setCategories] = useState([]);

        useEffect(() => {
            console.log("3. [Presenter] useEffect triggered");
            
            getCategories()
                .then(data => {
                    console.log("4. [Presenter] All categories received:", data);
                    
                    const firstFour = data.slice(0, 4);
                    
                    console.log("5. [Presenter] Sliced to first 4:", firstFour);
                    setCategories(firstFour);
                })
                .catch(error => console.error("Error fetching categories", error));
        }, []);

        function handleCategorySelectACB(id) {
            console.log("7. [Presenter] User clicked Category ID:", id);
        }

        return (
            <TriviaView
                categories={categories}
                onChooseCategory={handleCategorySelectACB}
            />
        );
    });

export { Trivia };