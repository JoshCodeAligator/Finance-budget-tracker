import Layout from "./Layout.jsx";

import Home from './Home.jsx';
import Spending from './Spending.jsx';
import Budget from './Budget.jsx';
import Tips from './Tips.jsx';


import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/spending",
        element: <Spending/>
      },
      {
        path: "/budget",
        element: <Budget/>
      },
      {
        path: "/tips",
        element: <Tips/>
      }
    ]
  }
]);

function App() {
  return <div>
    <RouterProvider router={router}/>
   </div>
  ;
}

export default App;
