import React from 'react';
import { useRoutes } from 'react-router-dom';
import PublicLayout from '../layouts/Public';
import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import HonorMessage from '../pages/HonorMessage';
import FinishedGameMessage from '../pages/FinishedGameMessage';
import Test from '../pages/Test';
import { PrivateRoute } from './PrivateRoute';

const Routing = () => {
  const routesList = [
    {
      path: '',
      element: (
        <PrivateRoute>
          <PublicLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: '/',
          element: <Main />,
        },
        {
          path: '/finishedGame',
          element: <FinishedGameMessage />,
        },
      ],
    },
    {
      path: '/tests',
      element: <PublicLayout />,
      children: [
        {
          path: ':id',
          element: <Test />,
        },
        {
          path: ':id/honor',
          element: <HonorMessage />,
        },
      ],
    },
    {
      path: '/auth',
      element: <PublicLayout />,
      children: [
        { path: 'signin', element: <SignIn /> },
        { path: 'signup', element: <SignUp /> },
      ],
    },
  ];
  const element = useRoutes(routesList);
  return element;
};

export default Routing;
