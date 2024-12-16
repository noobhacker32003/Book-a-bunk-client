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
import Cart from './component/Cart';
//import New from './component/New';
import Feedback from './component/Feedback';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("http://localhost:5000/rooms")
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
    loader: () => fetch("http://localhost:5000/rooms")
  },
  {
    path: "/studyRoom",
    element: <GroupStudy></GroupStudy>,
    loader: () => fetch("http://localhost:5000/studyRooms")
  },
  {
    path: "/Profile",
    element: <Profile></Profile>,
  },
  {
    path: "/room/:id", // Add route for RoomDetails
    element: <RoomDetails></RoomDetails>,
    loader: () => fetch("http://localhost:5000/rooms")
  },
  {
    path: "/studyRoom/:id",
    element: <StudyRoomDetails></StudyRoomDetails>,
    loader: () => fetch("http://localhost:5000/studyRooms")
    
  },
  {
    path: "/Cart",
    element: <Cart></Cart>
  },
  {
    path: "/feedback",
    element:<Feedback></Feedback>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
