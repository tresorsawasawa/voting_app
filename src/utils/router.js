import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Authentication/Login/Login';
import Register from '../pages/Authentication/Register/Register';
import AuthLayout from '../pages/Authentication/AuthenticationLayout';
import Home from '../pages/Home/Home';
import Candidates from '../pages/Candidates/Candidates';
import Elections from '../pages/Elections/Elections';
import Electors from '../pages/Electors/Electors';
import Candidate from '../pages/Candidate/Candidate';
import Vote from '../pages/Vote/Vote';
import User from '../pages/User/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/candidates',
        element: <Candidates />,
      },
      {
        path: '/elections',
        element: <Elections />,
      },
      {
        path: '/electors',
        element: <Electors />,
      },
      {
        path: '/vote_candidate',
        element: <Vote />,
      },
      {
        path: '/candidates/:id',
        element: <Candidate />,
      },
      {
        path: '/users/:id',
        element: <User />,
      },
      {
        element: <AuthLayout />,
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
    ],
  },
]);

export default router;
