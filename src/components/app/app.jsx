import { Layout } from "../layout/layout";
import "./main.css";
import { ThemeContextProvider } from "../themeContext/component";
import { UserContextProvider } from "../userContext/component";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { RestTabButtonsContainer } from "../restTabButtons/container";
import { RestaurantContainer } from "../restaurant/container";
import { MainPage } from "../mainPage/component";
import { DishList } from "../dish-list/component";
import { ReviewList } from "../review-list/component";
import { DishContainer } from "../dish/container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <Navigate to="/" />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "restaurants",
        element: <RestTabButtonsContainer />,
        children: [
          {
            path: ":restaurantId",
            element: (
              <div>
                <RestaurantContainer />
                <Navigate to="menu" />
              </div>
            ),
            children: [
              {
                path: "menu",
                element: <DishList />,
              },
              {
                path: "reviews",
                element: <ReviewList />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/dishes/:dishId",
    element: <DishContainer />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
export default App;
