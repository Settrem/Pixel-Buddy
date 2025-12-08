import './styles/App.css'
import { PixelTextBox } from './components/ui/PixelTextBox';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Sidebar } from './presenters/SidebarPresenter';
import { Bottombar } from './presenters/BottombarPresenter';
import { HashRouter } from "react-router-dom";
import { BORDERTHICKNESS } from './constants';
<<<<<<< HEAD
import { Trivia } from './presenters/TriviaPresenter';
=======
import { reaction } from "mobx";
import { TriviaView } from './views/TriviaView';
import { useState } from 'react';
import { connectToPersistence } from './persistence/firestoreModel';
import { useEffect } from 'react';
import { AuthenticationPage } from './presenters/AuthenticationPage'; // create this component
import { observer } from 'mobx-react-lite';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './persistence/firestoreModel'; 
>>>>>>> Firebase-User-Atuhentication-Development

const sidebarButtons = [
    { path: "buddy", type: "BUDDY", },
    { path: "settings", type: "SETTINGS", },
    { path: "apples", type: "APPLES", },
    { path: "trivia", type: "TRIVIA", },
    { path: "joke", type: "JOKE", },
    { path: "clothes", type: "CLOTHES", },
];

function makeRouter() {
  return createHashRouter([
    {
      path: "/",
      element: <PixelTextBox>buddy</PixelTextBox>,   // default screen
    },
    {
      path: "/buddy",
      element: <PixelTextBox>buddy</PixelTextBox>,
    },
    {
      path: "/settings",
      element: <PixelTextBox>settings</PixelTextBox>,
    },
    {
      path: "/apples",
      element: <PixelTextBox>apples</PixelTextBox>,
    },
    {
      path: "/trivia",
<<<<<<< HEAD
      element: <Trivia/>,
=======
      element: <div/>,
>>>>>>> Firebase-User-Atuhentication-Development
    },
    {
      path: "/joke",
      element: <PixelTextBox>joke</PixelTextBox>,
    },
    {
      path: "/clothes",
      element: <PixelTextBox>clothes</PixelTextBox>,
    }
  ]);
}

const App = observer(
  function App(props) {
    const [isReady, setIsReady] = useState(false);

<<<<<<< HEAD
function App() {
  return (
    <div className="h-screen flex flex-col w-[100%]">
      <div className="flex-1 flex flex-col sm:flex-row">
        <div 
          className='flex-1 h-full border-[10px] order-0 border-black 
            sm:order-2 sm:border-l-[10px] 
            bg-[url("https://i.etsystatic.com/45204689/r/il/ced310/6211125952/il_794xN.6211125952_f666.jpg")]
            bg-cover bg-center'        >
          <RouterProvider router={makeRouter()}/>
=======
    useEffect(() => {
  
      if (auth.currentUser) {
        connectToPersistence(props.userModel, reaction);
      }
      // Listen for login/logout events
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          console.log("User logged in:", user.uid);
          connectToPersistence(props.userModel, reaction);
        } else {
          console.log("User logged out");
        }
        setIsReady(true); // auth state known
      });
      return () => unsubscribe();
    }, []);

    // Wait until we know the auth state
    if (!isReady) return <div className="text-white">Loading...</div>;
    // No logged-in user
    if (!props.userModel.user) return <AuthenticationPage />;
    // Wait until model is ready
    if (!props.userModel.ready) return <div className="text-white">Loading user data...</div>;

    // Logged in and model ready → show main app
    return (
      <div className="h-screen flex flex-col w-[100%]">
        <div className="flex-1 flex flex-col sm:flex-row">
          <div 
            className='flex-1 h-full border-[10px] order-0 border-black 
              sm:order-2 sm:border-l-[10px] 
              bg-[url("https://i.imgflip.com/6gp1di.jpg")]
              bg-cover bg-center'        >
            <RouterProvider router={makeRouter()}/>
          </div>
          <Sidebar className="order-2 sm:order-1"
            sidebarButtons = {sidebarButtons}
            name = {props.userModel.buddyModel.name}
          ></Sidebar>
>>>>>>> Firebase-User-Atuhentication-Development
        </div>
        <Bottombar>{props.interfaceModel.TextBox}</Bottombar>
      </div>
    );
  }
)

export default App