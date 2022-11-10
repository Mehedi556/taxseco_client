import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService";
import Blog from "../Pages/Blog";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyReviews from "../Pages/MyReviews";
import Register from "../Pages/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";
import PrivetRoute from "./PrivetRoute";

export const routes = createBrowserRouter([
  {
      path: '/',
      element: <Main></Main>,
      children: [
          {
              path: '/',
              element: <Home></Home>,
              loader: () => fetch('http://localhost:5000/services')
          },
          {
            path: '/login',
            element: <Login></Login>,
          },
          {
            path: '/register',
            element: <Register></Register>,
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          },
          {
            path: '/myreviews',
            element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>
          },
          {
            path: '/addservice',
            element: <PrivetRoute><AddService></AddService></PrivetRoute>
          },
          {
            path: '/service',
            element: <Services></Services>,
            loader: () => fetch('http://localhost:5000/service')
          },
          {
            path: '/service/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
          },
          {
            path: '*',
            element: <Error></Error>,
          }
      ]
  }
])

