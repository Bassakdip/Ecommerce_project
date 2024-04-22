import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import CartProvider from './Context/CartProvider';
import About from './Pages/About';
import Home from './Pages/Home';


const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <App />
  },
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/Home",
    element: <Home/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <RouterProvider router={appRouter}></RouterProvider>
  </CartProvider>
);
