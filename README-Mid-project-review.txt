

1. Short Description
PixelBuddy is a virtual pet web application built using React and the Model-View-Presenter (MVP) architecture. Users take care of a digital companion by managing stats like Hunger, Energy, and Happiness through mini-games and interactions. The project utilizes MobX for state management and Firebase for persistence.

2. What We Have Done
- Initialized the project structure using React and Vite.
- Established the MVP (Model-View-Presenter) architectural pattern.
- Implemented user authentication (Sign up/Login) using Firebase.
- Integrated the OpenTDB API for the Trivia mini-game.
- Implemented basic sprite rendering for the Buddy character.
- Created reusable UI components (Pixel-themed buttons and inputs).
- Set up the global application state models (User and Interface).

3. What We Plan to Do
- More API Calls.
- Implement the core game loop for stat decay over time.
- Refine and clean up existing codebases for better maintainability.
- Double-check code compliance with the MVP formula.
- Complete the "Apple Catch" mini-game.
- Complete the "Trivia" mini-game.
- Polish mobile responsiveness and navigation layouts.

4. Project File Structure

### Root & Config
- `src/App.jsx`: Main application component structure.
- `src/constants.js`: Global configuration variables and enums.
- `src/index.jsx`: Entry point for React DOM rendering.
- `src/triviaSource.js`: Handles API requests for trivia data.

### Model
- `src/model/InterfaceModel.js`: Manages non-reactive application state.
- `src/model/ReactiveInterfaceModel.js`: MobX wrapper for interface state.
- `src/model/ReactiveUserModel.js`: MobX wrapper for user state.
- `src/model/UserModel.js`: Core logic for user data and buddy stats.

### Persistence
- `src/persistence/firebaseConfig.js`: Configuration keys for Firebase services.
- `src/persistence/firestoreModel.js`: Handles data synchronization between Model and Firestore.

### Presenters (Logic)
- `src/presenters/ApplesPresenter.jsx`: Logic handler for the Apple mini-game.
- `src/presenters/AuthenticationPage.jsx`: Wrapper logic for the authentication screens.
- `src/presenters/BottombarPresenter.jsx`: Logic for mobile navigation interactions.
- `src/presenters/BuddyPresenter.jsx`: Logic for handling main character interactions.
- `src/presenters/ClothesPresenter.jsx`: Logic for the wardrobe and customization features.
- `src/presenters/JokePresenter.jsx`: Logic handler for the Joke API feature.
- `src/presenters/LogInPresenter.jsx`: Handles user login form logic.
- `src/presenters/SettingsPresenter.jsx`: Logic for application settings.
- `src/presenters/SidebarPresenter.jsx`: Logic for desktop navigation interactions.
- `src/presenters/SignUpPresenter.jsx`: Handles user registration form logic.
- `src/presenters/TriviaPresenter.jsx`: Logic handler for the Trivia mini-game.

### Views (UI)
- `src/views/ApplesView.jsx`: Visual component for the Apple game.
- `src/views/BottombarView.jsx`: Visual component for the mobile bottom menu.
- `src/views/BuddyView.jsx`: Visual component for the main character screen.
- `src/views/ClothesView.jsx`: Visual component for the clothing customization screen.
- `src/views/JokeView.jsx`: Visual component for displaying jokes.
- `src/views/SettingsView.jsx`: Visual component for the settings screen.
- `src/views/SidebarView.jsx`: Visual component for the desktop sidebar.
- `src/views/TriviaQuestionView.jsx`: Displays the active question in the trivia game.
- `src/views/TriviaResultView.jsx`: Displays the results after a trivia game.
- `src/views/TriviaView.jsx`: Main container view for the trivia game.

### Components / UI / Lib
- `src/components/ui/PixelButton.jsx`: Custom styled pixel-art button component.
- `src/components/ui/PixelInput.jsx`: Custom styled input field component.
- `src/components/ui/PixelTextBox.jsx`: Custom styled text display component.
- `src/components/ui/button.jsx`: Base generic button component.
- `src/components/ui/carousel.jsx`: Generic carousel component for sliding elements.
- `src/lib/utils.js`: General utility helper functions.

### Styles
- `src/styles/App.css`: Main stylesheet for application layout.
- `src/styles/index.css`: Global CSS resets and base styles.
