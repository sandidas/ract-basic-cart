import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Countries from "../components/Countries/Countries";
import Country from "../components/Country/Country";
import Error from "../components/Error/Error";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Friends from "../components/Friends/Friends";
import Home from "../components/Home/Home";
import Orders from "../components/Orders/Orders";
import Products from "../components/Products/Products";
import Main from "../layout/Main";
import { productcsAndCartLoader } from "../loaders/productcsAndCartLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "/", // default home page
        index: true, // default home page as react documentation
        element: <Home></Home>,
      },
      {
        path: "/home", // default home page
        element: <Home></Home>,
      },
      { path: "service", element: <div>Hello Service!</div> },
      {
        path: "friends",
        loader: () => {
          return fetch(`https://jsonplaceholder.typicode.com/users`);
        },
        element: <Friends></Friends>,
      },
      {
        path: "countries",
        loader: async () => {
          return fetch(`https://restcountries.com/v3.1/all`);
        },
        element: <Countries></Countries>,
      },
      {
        path: "countries/country/:name",
        loader: async ({ params }) => {
          return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
        },
        element: <Country></Country>,
      },
      {
        path: "products",
        loader: () => fetch("products.json"),
        element: <Products></Products>,
      },
      {
        path: "orders",
        loader: productcsAndCartLoader,
        element: <Orders></Orders>,
      },

      //  { path: "*", element: <Error></Error>},
    ],
  },

  { path: "/about", element: <About>This is About</About>, errorElement: <ErrorPage></ErrorPage> },
  //   404 Router
]);
