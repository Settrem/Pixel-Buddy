import './styles/App.css'
import { PixelTextBox } from './components/ui/PixelTextBox';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Sidebar } from './presenters/SidebarPresenter';
import { Bottombar } from './presenters/BottombarPresenter';
import { BORDERTHICKNESS } from './constants';
import { TriviaView } from './views/TriviaView';

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
      element: <TriviaView/>,
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


function App(props) {
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
      </div>
      <Bottombar>Hello</Bottombar>
    </div>
  );
}

export default App