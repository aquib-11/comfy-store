import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  About,
  Login,
  Register,
  Orders,
  Checkout,
  Cart,
  Product,
  Products,
  Error,
} from "./pages";
import { ErrorElement, OrdersList } from "./components";
//redux ------store
import { store } from "./store";

//LOADERS
import { loader as LandingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/Product";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as OrdersLoader } from "./pages/Orders";
import { loader as checkoutLoader } from "./pages/Checkout";

//ACTIONS
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutSubmit";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader,
      },
      {
        path: "products",
        errorElement: <ErrorElement />,
        element: <Products />,
        loader: ProductsLoader,
      },
      {
        path: "products/:id",
        errorElement: <ErrorElement />,
        element: <Product />,
        loader: SingleProductLoader,
      },
      {
        path: "cart",
        errorElement: <ErrorElement />,
        element: <Cart />,
      },
      {
        path: "checkout",
        errorElement: <ErrorElement />,
        element: <Checkout />,
        loader:checkoutLoader(store),
        action:checkoutAction(store),
      },
      {
        path: "orders",
        errorElement: <ErrorElement />,
        element: <Orders />,
        loader:OrdersLoader(store),
      },
      {
        path: "about",
        errorElement: <ErrorElement />,
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action:loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action:registerAction
  },
]);

const App = () => {
return <RouterProvider router={router}></RouterProvider>
};
export default App;
