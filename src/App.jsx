import { RouterProvider, createBrowserRouter } from "react-router-dom"  
import Home from "./ui/Home"
import Menu ,{loader as Menuloader} from "./features/Menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder , {action as createOrderData} from "./features/order/CreateOrder"
import Order ,{loader as Orderloader} from "./features/order/Order"
import AppLayout from "./ui/AppLayout"
import Error from "./ui/Error"

const router = createBrowserRouter(
  [
    {
      element:<AppLayout />,
      errorElement:<Error />,
      children:[
        {
        path: "/",
        element:<Home/>
      },
      {
        path:"/menu",
        element:<Menu />,
        loader:Menuloader,
        errorElement:<Error />,
      },
      {
        path:"cart",
        element:<Cart />
      },
      {
        path:"/order/new",
        element:<CreateOrder />,
        action:createOrderData
      },
      {
        path:"/order/:orderId",
        element:<Order />,
        loader:Orderloader,
        errorElement:<Error />,
      }]
    }
  ]
)
function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App