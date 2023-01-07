import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {

  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
