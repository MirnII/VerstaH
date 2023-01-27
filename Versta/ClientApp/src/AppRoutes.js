
import { Home } from "./components/Home";
import { CreateOrder } from "./components/CreateOrder";
import { ViewingOrders } from "./components/ViewingOrders";
import { Order } from "./components/Order";
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
    
  {
    path: '/viewing-orders/*',
    element: <ViewingOrders />

  },
   
  {
    path: '/create-order',
    element: <CreateOrder />
  },

  {
      path: '/order/:id',
      element: <Order />

      }



];

export default AppRoutes;
