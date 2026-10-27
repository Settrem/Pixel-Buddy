# PixelBuddy

Hello!
Entrusted in your care is your very own **PixelBuddy**,  a tiny digital companion who depends entirely on you.
Raising a PixelBuddy is rewarding, but it also takes attention, commitment, and a bit of strategy.

Your PixelBuddy has **three core needs**:

* **Hunger**
* **Happiness**
* **Energy**

Keeping these needs balanced is the key to helping your PixelBuddy thrive.

### How It Works

Interact with your PixelBuddy through a collection of **mini-games and activities**, each affecting their well-being in different ways:

* **Apple Catcher** keeps your PixelBuddy well-fed
* **Trivia** and **Jokes** boost happiness (PixelBuddies *love* telling jokes)
* Playing games consumes **Energy**, so choose your activities wisely

Neglecting your PixelBuddy will cause **Hunger and Happiness to slowly deplete**, while stepping away from the game allows **Energy to recover over time**.

### Take Good Care

PixelBuddies are resilient, but not invincible!

* If **Happiness reaches zero**, your PixelBuddy may refuse to change outfits
* If **Hunger is fully depleted**, your PixelBuddy will not survive
* Balancing play, rest, and care is essential for long-term companionship

### Make It Yours

Personalize your experience:

* Rename your PixelBuddy
* Change themes
* Customize outfits and appearance

All settings are available through the **Settings menu**, located in the top-right corner of the app.

Your PixelBuddy is waiting.
Take good care of them 💚

## Technical Overview

PixelBuddy is a **state-driven game application** built using **React** and structured around the **Model–View–Presenter (MVP)** architecture. The design prioritizes clean separation of concerns, scalability, and maintainability.

* **Models** contain all business logic and game state, using **MobX** for reactivity
* **Views** are pure React components responsible only for rendering
* **Presenters** handle user interaction and coordinate data flow between models and views

Mini-games are implemented using **Phaser**, isolating real-time game logic from the React UI layer. Results are communicated back to the application state through presenters.

User authentication and persistence are handled via **Firebase**, while external APIs (Trivia, Weather, Jokes) enrich gameplay. Styling and responsiveness are managed with **Tailwind CSS** and custom pixel-themed UI components.

## Core Features

* Virtual pet with persistent stats
* Interactive mini-games (Trivia, Apple Catch, etc.)
* Pet customization (clothing & appearance)
* User authentication (Sign up / Login)
* Responsive UI for mobile and desktop
* Pixel-themed reusable UI components

## 🛠️ Technologies Used

* **React + Vite** — Frontend framework and build tooling
* **Figma** — Designing User Interface
* **MobX** — Reactive state management
* **Firebase** — Authentication & Firestore persistence
* **MVP Architecture** — Clean separation of logic, state, and UI
* **JavaScript** — Model logic, state, and API calls
* **Phaser** — 2D game framework used for implementing interactive mini-games
* **TailWind** — Styling and Screen Size reactivity
* **OpenTDB API** — Trivia mini-game questions
* **Open Meteo API** — Fetch weather for current location
* **JokeAPI** — Generate Jokes

## Project Structure

### Root & Configuration

```
src/
├── App.jsx                # Main application component
├── index.jsx              # React DOM entry point
├── constants.js           # Global configuration and enums
├── appleGame.js           # Game logic for apple game using phaser js library

```

### Model (Application State & Logic)

```
src/model/
├── UserModel.js                  # Core user data and buddy stats logic
├── InterfaceModel.js             # Non-reactive interface state
├── ReactiveUserModel.js          # MobX wrapper for user state
├── ReactiveInterfaceModel.js     # MobX wrapper for interface state
├── buddyCustomization.js         # Name to link buddy clothing assets to clothes presenter
```

### Persistence (Firebase)

```
src/persistence/
├── firebaseConfig.js      # Firebase configuration
├── firestoreModel.js      # Firestore ↔ Model synchronization
```

### Presenters (Application Logic)

```
src/presenters/
├── ApplesPresenter.jsx
├── AuthenticationPage.jsx
├── BackgroundPresenter.jsx
├── BottombarPresenter.jsx
├── BuddyPresenter.jsx
├── BuddyWeatherPresenter.jsx
├── ClothesPresenter.jsx
├── DeathScreenPresenter.jsx
├── HelpPresenter.jsx
├── JokePresenter.jsx
├── LogInPresenter.jsx
├── SettingsButtonPresenter.jsx
├── SettingsPresenter.jsx
├── SidebarPresenter.jsx
├── SignUpPresenter.jsx
├── StatusBarPresenter.jsx
├── TriviaPresenter.jsx
```

Each presenter acts as the **middle layer**, handling logic and coordination between models and views.

### Views (UI Components)

```
src/views/
/ApplesViews
    ├── ApplesGameView.jsx
    ├── ApplesResultView.jsx
    ├── ApplesStartView.jsx
/TriviaView
    ├── TriviaCategoryView.jsx
    ├── TriviaQuestionView.jsx
    ├── TriviaResultView.jsx
    ├── TriviaStartView.jsx
├── BackgroundView.jsx
├── BottombarView.jsx
├── BuddyView.jsx
├── ClothesView.jsx
├── DeathScreenView.jsx
├── HelpView.jsx
├── InputFormView.jsx
├── LogInView.jsx
├── NoEnergyGaeView.jsx
├── NotHappyView.jsx
├── SettingsView.jsx
├── SidebarView.jsx
├── SignUpView.jsx
├── StatusView.jsx
├── SuspenseView.jsx
```

Views are **pure UI components** and contain no business logic.

### Reusable UI Components

```
src/components/ui/
├── PixelButton.jsx
├── PixelColorButton.jsx
├── PixelDialogPopUp.jsx
├── PixelInput.jsx
├── PixelStatusBar.jsx
├── PixelTextBox.jsx
├── button.jsx
├── carousel.jsx
```

### API Utilities

```
src/utils/api_utils/
├── TriviaSource.js
├── JokeSource.js
├── WeatherSource.js

```

### Styling

```
src/styles/
├── index.css              # Global resets and base styles
├── App.css                # Application layout styles
```

Styling was mainly done with Tailwind inside of the custom components and Views

## Credits

* **Project Director** — Adar Deprem
* **UI Design and Development** — Adar Deprem
* **Application Model Development** — Adar Deprem
* **Game Design and Development** — Razmus Nilsson
* **Pixel Art** — Måns Hjalmarsson
* **Buddy Design** — Måns Hjalmarsson
* **Sound Design** — Måns Hjalmarsson

## Links

* **Figma UI Design:** [https://www.figma.com/design/5vWaCldDAagk4d4DuVoCqa/FrontPage?node-id=0-1&p=f&t=atYsATCqtZ8RFEth-0](https://www.figma.com/design/5vWaCldDAagk4d4DuVoCqa/FrontPage?node-id=0-1&t=atYsATCqtZ8RFEth-1)
* **Runnint App:** [pixelbuddy-396b8.web.app](https://pixelbuddy-396b8.web.app)
