import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserLayout from "./Components/UserLayout/UserLayout"
import Home from "./Components/Home/Home"
import Details from "./Components/details/Details"
import AdminHome from "./Admin/AdminHome/AdminHome"
import AdminLogin from "./Admin-Login/AdminLogin"
import AdminRegister from "./Admin-Register/AdminRegister"





function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,





    
      children:[
        {
          path:"home",
          element:<Home/>
        },

        {
          path:"Details/:name",
          element:<Details/>
        },


       

       
        
      ]
    },


    {
      path:"/AdminHome",
      element:<AdminHome/>,
    },

    {
      path:"/Admin-login",
      element:<AdminLogin/>,
    },
    {
      path:"/Admin-register",
      element:<AdminRegister/>,
    },








 ])

  return (
    < RouterProvider router={router} />

  )
}

export default App
