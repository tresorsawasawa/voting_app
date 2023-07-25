import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import NotFound from '../components/NotFound/NotFound';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/sign_in',
        element: <Login />,
      },
      {
        path: '/sign_up',
        element: <Register />,
      },
    ],
  },
]);

export default router;
