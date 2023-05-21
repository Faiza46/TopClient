import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Shop from './Pages/Shop/Shop';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound'
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/Sign Up/SignUp';
import PrivateRoute from './Pages/routes/PrivateRoute';
import Order from './Pages/Order/Order';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/shop',
          loader: () => fetch('products.json'),
          element: <PrivateRoute><Shop></Shop></PrivateRoute>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>

        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/orderReview',
          element: <Order></Order>
        }


      ]

    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }


  ])
  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>


    </div>
  );
}

export default App;
