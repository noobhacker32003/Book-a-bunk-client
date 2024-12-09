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
import RoomDetails from './component/RoomDetails';
import StudyRoomDetails from './component/StudyRoomDetails';



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
  {
    path: "/room/:id", // Add route for RoomDetails
    element: <RoomDetails></RoomDetails>,
  },
  {
    path: "/studyRoom/:id",
    element: <StudyRoomDetails></StudyRoomDetails>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
