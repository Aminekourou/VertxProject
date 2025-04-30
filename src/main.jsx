import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import Homepage from './Routes/Homepage.jsx';
import PostListPage from './Routes/PostListPage.jsx';
import Write from './Routes/Write.jsx';
import LoginPage from './Routes/LoginPage.jsx';
import RegisterPage from './Routes/RegisterPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage />
      
    ),
  },
  {
    path: "/posts",
    element: <PostListPage />,
  },
  {
    path: "/:slug",
    element: <PostListPage />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/:slug",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
