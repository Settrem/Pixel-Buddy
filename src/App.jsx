import './styles/App.css'
import { PixelTextBox } from './components/ui/PixelTextBox';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Sidebar } from './presenters/SidebarPresenter';
import { Bottombar } from './presenters/BottombarPresenter';
import { HashRouter } from "react-router-dom";
import { BORDERTHICKNESS } from './constants';
import { reaction } from "mobx";
import { Trivia } from './presenters/TriviaPresenter';
import { Apples } from './presenters/ApplesPresenter.jsx';
import { useState } from 'react';
import { connectToPersistence } from './persistence/firestoreModel';
import { useEffect } from 'react';
import { AuthenticationPage } from './presenters/AuthenticationPage'; // create this component
import { observer } from 'mobx-react-lite';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './persistence/firestoreModel';
import { Buddy } from './presenters/BuddyPresenter.jsx';
import { BuddyWeather } from './presenters/BuddyWeatherPresenter.jsx';
import { Clothes } from './presenters/ClothesPresenter.jsx';
import { userModel } from './model/UserModel.js';
import { Settings } from './presenters/SettingsPresenter';
import { JokeAsBuddyWrapper } from './presenters/JokePresenter.jsx';
import { Background } from './presenters/BackgroundPresenter.jsx';
import { StatusBarPresenter } from './presenters/StatusBarPresenter.jsx';
import { SettingsButtonPresenter } from './presenters/SettingsButtonPresenter.jsx';
import { SuspenseView } from './views/SuspenseView.jsx';

const sidebarButtons = [
    { path: "buddy", type: "BUDDY", },
    { path: "clothes", type: "CLOTHES", },
    { path: "feed", type: "FEED", },
    { path: "trivia", type: "TRIVIA", },
    { path: "joke", type: "JOKE", },
];

function makeRouter(props) {
  return createHashRouter([
    {
      path: "/",
      element: <BuddyWeather
        model = {props.userModel}
        interfaceModel={props.interfaceModel}
      />,
    },
    {
      path: "/buddy",
      element: <BuddyWeather
        model = {props.userModel}
        interfaceModel={props.interfaceModel}
      />,
    },
    {
      path: "/settings",
      element: <Settings userModel = {props.userModel}/>,
    },
    {
      path: "/feed",
      element: <Apples 
      interfaceModel={props.interfaceModel}
      userModel={props.userModel}
      />,
    },
    {
      path: "/trivia",
      element: <Trivia 
      interfaceModel={props.interfaceModel}
      userModel={props.userModel}/>,
    },
    {
      path: "/joke",
      element: <JokeAsBuddyWrapper
          key={props.interfaceModel.jokeReloadToken} 
          userModel = {props.userModel}
          interfaceModel={props.interfaceModel}
        />,
    },
    {
      path: "/clothes",
      element: <Clothes
        model = {props.userModel}
      />,
    }
  ]);
}

const App = observer(
  function App(props) {
    const [authUser, setAuthUser] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setAuthUser(user);

        if (user) {
          connectToPersistence(props.userModel, reaction);
        }

        setIsReady(true);
      });

      return unsubscribe;
    }, []);

    // Wait until we know the auth state
    if (!isReady) return <SuspenseView />;
    // No logged-in user
    if (!authUser) return <AuthenticationPage />;
    // Wait until model is ready
    if (!props.userModel.ready) return <SuspenseView />;

    // Logged in and model ready → show main app
    return (
      <div className="h-screen flex flex-col w-[100%]">
        <div className="flex-1 sm:max-h-[650px] flex flex-col sm:flex-row">
          <div 
            className='flex-1 h-full min-h-[400px] border-[10px] 
              order-0 sm:order-2
            border-black  sm:border-l-[10px] 
              relative overflow-hidden
          '> 
            <SettingsButtonPresenter/> 
            <Background interfaceModel = {props.interfaceModel} />
            <div className="relative z-10 w-full h-full"> 
              <RouterProvider router={makeRouter(props)}/>
            </div>
          </div>
          <Sidebar className="order-2 sm:order-1"
            interfaceModel = {props.interfaceModel}
            sidebarButtons = {sidebarButtons}
            name = {props.userModel.buddyModel.name}
          ></Sidebar>
        </div>
        <Bottombar>{props.interfaceModel.TextBox}</Bottombar>
      </div>
    );
  }
)

export default App