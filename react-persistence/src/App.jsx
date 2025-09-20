import "./App.css";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/Login";
import ProductRoutes from "./components/productRoutes";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      path: "/dashboard",
      element: (
        <ProductRoutes>
          <Dashboard />
        </ProductRoutes>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
