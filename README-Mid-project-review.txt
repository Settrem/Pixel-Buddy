# PixelBuddy

**Course:** Interaction Programming and the Dynamic Web (DH2642)
**Authors:** Razmus Nilsson, Måns Hjalmarsson, Adar Deprem

## 1. Short Description
PixelBuddy is a virtual pet web application built using React and the Model-View-Presenter (MVP) architecture. Users take care of a digital companion by managing stats like Hunger, Energy, and Happiness through mini-games and interactions. The project utilizes MobX for state management and Firebase for persistence.

## 2. What We Have Done
- Initialized the project structure using React and Vite.
- Established the MVP (Model-View-Presenter) architectural pattern.
- Implemented user authentication (Sign up/Login) using Firebase.
- Integrated the OpenTDB API for the Trivia mini-game.
- Implemented basic sprite rendering for the Buddy character.
- Created reusable UI components (Pixel-themed buttons and inputs).
- Set up the global application state models (User and Interface).

## 3. What We Plan to Do
- Expand integration with APIs.
- Implement the core game loop for stat decay over time.
- Refine and clean up existing codebases for better maintainability.
- Complete the "Apple Catch" mini-game.
- Complete the "Trivia" mini-game.
- Polish mobile responsiveness and navigation layouts.

## 4. Project File Structure

### Root & Config
- `src/App.jsx`: Main application component structure.
- `src/constants.js`: Global configuration variables and enums.
- `src/index.jsx`: Entry point for React DOM rendering.
- `src/triviaSource.js`: Handles API requests for trivia data.

### Model
- `src/model/InterfaceModel.js`: Manages non-reactive application state.
- `src/model/ReactiveInterfaceModel.js`: MobX wrapper for interface state.
- `src/model/ReactiveUserModel.js`: MobX wrapper for user state.
- `src/model/UserModel.js`: core logic for user data and buddy stats.

### Persistence
- `src/persistence/firebaseConfig.js`: Configuration keys for Firebase services.
- `src/persistence/firestoreModel.js`: Handles data synchronization between Model and Firestore.

### Presenters (Logic)
- `src/presenters/ApplesPresenter.jsx`: Logic handler for the Apple mini-game.
- `src/presenters/AuthenticationPage.jsx`: Wrapper for authentication logic.
- `src/presenters/BottombarPresenter.jsx`: Logic for mobile navigation.
- `src/presenters/BuddyPresenter.jsx`: Handles main character interactions.
- `src/presenters/ClothesPresenter.jsx`: Logic for the wardrobe/customization.
- `src/presenters/JokePresenter.jsx`: Logic handler for the Joke feature.
- `src/presenters/LogInPresenter.jsx`: Handles user login actions.
- `src/presenters/SettingsPresenter.jsx`: Logic for app settings.
- `src/presenters/SidebarPresenter.jsx`: Logic for desktop navigation.
- `src/presenters/SignUpPresenter.jsx`: Handles user registration actions.
- `src/presenters/TriviaPresenter.jsx`: Logic handler for the Trivia game.

### Views (UI)
- `src/views/ApplesView.jsx`: Visual component for the Apple game.
- `src/views/BottombarView.jsx`: Visual component for mobile navigation.
- `src/views/BuddyView.jsx`: Visual component for the main character.
- `src/views/ClothesView.jsx`: Visual component for customization.
- `src/views/JokeView.jsx`: Visual component for the joke interface.
- `src/views/SettingsView.jsx`: Visual component for settings.
- `src/views/SidebarView.jsx`: Visual component for desktop navigation.
- `src/views/TriviaQuestionView.jsx`: Displays active trivia questions.
- `src/views/TriviaResultView.jsx`: Displays trivia game results.
- `src/views/TriviaView.jsx`: Main container view for trivia.

### Components / UI / Lib
- `src/components/ui/PixelButton.jsx`: Styled button component.
- `src/components/ui/PixelInput.jsx`: Styled input field component.
- `src/components/ui/PixelTextBox.jsx`: Styled text container component.
- `src/components/ui/button.jsx`: Generic button component.
- `src/components/ui/carousel.jsx`: Generic carousel component.
- `src/lib/utils.js`: General utility helper functions.