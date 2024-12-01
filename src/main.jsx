import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import RoomBooking from './component/RoomBooking';
import GroupStudy from './component/GroupStudy';
import Profile from './component/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/rooms",
    element: <RoomBooking></RoomBooking>,
  },
  {
    path: "/studyRoom",
    element: <GroupStudy></GroupStudy>,
  },
  {
    path: "/Profile",
    element: <Profile></Profile>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
