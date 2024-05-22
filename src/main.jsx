import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Bag from "./components/Bag.jsx"
import Center from './components/Center.jsx';
import {Provider} from "react-redux";
import appstore from './Store/store.js';
import "bootstrap/dist/css/bootstrap.min.css"


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {path:"/",element:<Center/>},
      {path:"/bag",element:<Bag/>}
    ]
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appstore}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
