import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserLayout from "./Components/UserLayout/UserLayout"
import Home from "./Components/Home/Home"
import Details from "./Components/details/Details"
import AdminHome from "./Admin/AdminHome/AdminHome"
import AdminLogin from "./Admin-Login/AdminLogin"
import AdminRegister from "./Admin-Register/AdminRegister"
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import AdminProduct from "./Admin/AdminProduct/AdminProduct.jsx"
import AdminAddProduct from "./Admin/AdminAddProduct/AdminAddProduct.jsx"
import UserLogin from "./User-Login/UserLogin.jsx"
import UserRegister from "./User-Register/UserRegister.jsx"
import AdminEditProduct from "./Admin/AdminEditProduct/AdminEditProduct.jsx"
import AdminCategories from "./Admin/AdminCategories/AdminCategories.jsx"
import AdminAddCategories from "./Admin/AdminAddCategories/AdminAddCategories.jsx"
import AdminEditCategories from "./Admin/AdminEditCategories/AdminEditCategories.jsx"
import AdminBanner from "./Admin/AdminBanner/AdminBanner.jsx"
import AdminAddBanner from "./Admin/AdminAddBanner/AdminAddBanner.jsx"
import AdminEditBanner from "./Admin/AdminEditBanner/AdminEditBanner.jsx"
import AdminBlog4 from "./Admin/AdminBlog4/AdminBlog4.jsx"
import AdminViewBlog4 from "./Admin/AdminViewBlog4/AdminViewBlog4.jsx"
import AdminEditBlog4 from "./Admin/AdminEditBlog4/AdminEditBlog4.jsx"
import AdminAddBlog4 from "./Admin/AdminAddBlog4/AdminAddBlog4.jsx"
import Wishlist from "./Components/Wishlist/Wishlist.jsx"
import ShoppingBag from "./Components/ShoppingBag/ShoppingBag.jsx"
import Accounts from "./Components/Accounts/Accounts.jsx"
import OrderManagement from './Admin/Pages/Orders/OrderManagement.jsx'
import SingleOrders from './Admin/Pages/Orders/SingleOrders.jsx'
import OrderSearch from './Admin/Pages/Orders/OrderSearch.jsx'
import OrderLayout from './Admin/Pages/Orders/OrderLayout.jsx'
import New from './Admin/Pages/Orders/New.jsx'
import Processing from './Admin/Pages/Orders/Proccessing.jsx'
import Shipped from './Admin/Pages/Orders/Shipped.jsx'
import Cancelled from './Admin/Pages/Orders/Cancelled.jsx'
import Succesfull from './Components/Payment/Successfull.jsx'
import Address2 from './Components/Payment/Address2.jsx'
import Cart from "./Components/Cart/Cart.jsx"
import Orders from "./Components/Orders/Orders.jsx"
import EmptyCart from "./Components/Cart/EmptyCart.jsx"
import Payment from "./Components/Payment/Payment.jsx"

import UserCart from "./Components/UserCart.jsx"




function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:'/cart',
      element:<UserCart/>
    },
      {
          path:"Details/:name",
          element:<Details/>
        }, 

        {
          path:"wishlist",
          element:<Wishlist/>
        }, 

        {
          path:"shopping",
          element:<ShoppingBag/>
        }, 

        {
          path:"accounts",
          element:<Accounts/>
        }, 

         
        // {
        //   path: "wishlist",
        //   element: <Whishlist/>
        // },
        {
          path: "order",
          element: <Orders/>
        },
        {
          path: "cart-empty",
          element: <EmptyCart/>
        },
        // {
        //   path: "wishlist-empty",
        //   element: <EmptyWishlist/>
        // },
        // {
        //   path: "order-empty",
        //   element: <EmptyOrders/>
        // },
        {
          path: "shipping-address/:id",
          element: <Address2/>
        },
        {
          path: "shipping-address",
          element: <Address2/>
        },  
        {
          path: "payment",
          element: <Payment/>
        },
        {
          path: "successfull",
          element: <Succesfull/>
        },
    ,
    {
      path: "/admin",
      element: <AdminLayout />,
      children:[
       
        {
          path:"admin-add-product",
          element:<AdminAddProduct/>
        },
        
        {
          path:"product",
          element:<AdminProduct/>
        },
        {
          path:"edit-product/:id",
          element:<AdminEditProduct/>
        },

        {
          path:"admin-category",
          element:<AdminCategories/>
        },

        {
          path:"categories",
          element:<AdminAddCategories/>
        },
        {
          path:"edit-category",
          element:<AdminEditCategories/>
        },

        {
          path:"banner",
          element:<AdminBanner/>
        },
        {
          path:"add-banner",
          element:<AdminAddBanner/>
        },
       
        {
          path:"edit-Banner",
          element:<AdminEditBanner/>
        },


        {
          path: "orders",
          element: <OrderLayout/>,
          children: [
            {
              path: "",
              element: <OrderManagement/>
            },
            // {
            //   path: "user/:id",
            //   element: <UserOrders/>
            // },
            {
              path: "all",
              element: <OrderManagement/>
            },
            {
              path: "new",
              element: <New/>
            },
            {
              path: "Processing",
              element: <Processing/>
            },
            {
              path: "shipped",
              element: <Shipped/>
            },
            {
              path: "cancelled",
              element: <Cancelled/>
            },
            {
              path: "search",
              element: <OrderSearch/>
            }
          ]
        },
        {
          path: "single-orders",
          element: <SingleOrders/>
        },










        {  
        path: "blog4",
        element: <AdminBlog4/>,
        children: [
          {
            path: "",
            element: <AdminViewBlog4/>
          },
          {
            path:"edit-blog/:id",
            element : <AdminEditBlog4/>
          },
          {
            path:"add-blog4",
            element : <AdminAddBlog4/>
          }
        ]
      }

      


       

        

      
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

    {
      path:"/user-login",
      element:<UserLogin/>,
    },

    {
      path:"/user-register",
      element:<UserRegister/>,
    },








 ])

  return (
    < RouterProvider router={router} />

  )
}

export default App
