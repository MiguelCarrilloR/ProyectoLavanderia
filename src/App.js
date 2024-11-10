import BillingPage from "./components/BillingPage";
import Home from "./components/Home";
import Login from "./components/Login"
import Register from "./components/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <Home /> },
  { path: "/billing", element: <BillingPage /> },
]



const router = createBrowserRouter(routes);

function App() {

  return <RouterProvider router={router} />;
}

export default App
