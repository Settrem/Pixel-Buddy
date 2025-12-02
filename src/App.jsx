
import './styles/App.css'
import { PixelTextBox } from './components/ui/PixelTextBox';
import { createHashRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from './presenters/SidebarPresenter';
import { Bottombar } from './presenters/BottombarPresenter';
import { TriviaView } from "./views/TriviaView";
import { ApplesView } from './views/ApplesView';
import { JokeView } from './views/JokeView';
import { SettingsView } from './views/SettingsView';
import { ClothesView } from './views/ClothesView';
import { BuddyView } from './views/BuddyView';

const sidebarButtons = [
  { path: "buddy", type: "BUDDY", },
  { path: "settings", type: "SETTINGS", },
  { path: "apples", type: "APPLES", },
  { path: "trivia", type: "TRIVIA", },
  { path: "joke", type: "JOKE", },
  { path: "clothes", type: "CLOTHES", },
];

function RootLayout() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col w-[100%]">
      <div className="flex-1 flex flex-col sm:flex-row">
        <div
          className='flex-1 bg-red-500 h-full border-[10px] order-0 border-black sm:order-2 sm:border-l-[10px]'
        >
          { }
          <Outlet />
        </div>
        <Sidebar className="order-2 sm:order-1"
          sidebarButtons={sidebarButtons}
          name={"MILOU"}
          buttonClickedCB={(btn) => navigate(`/${btn.path}`)}
        ></Sidebar>
      </div>
      <Bottombar>Hello</Bottombar>
    </div>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <BuddyView />,
      },
      {
        path: "buddy",
        element: <BuddyView />,
      },
      {
        path: "settings",
        element: <SettingsView />,
      },
      {
        path: "apples",
        element: <ApplesView />,
      },
      {
        path: "trivia",
        element: <TriviaView />,
      },
      {
        path: "joke",
        element: <JokeView />,
      },
      {
        path: "clothes",
        element: <ClothesView />,
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
