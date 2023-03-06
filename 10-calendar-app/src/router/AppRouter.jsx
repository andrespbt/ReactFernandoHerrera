import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';

export const AppRouter = () => {
  const authStatus = 'authenticated';

  const router = createBrowserRouter([
    {
      path: '/auth/*',
      element: authStatus === 'not-authenticated' ? <LoginPage /> : <CalendarPage />,
    },
    {
      path: '/*',
      element: <Navigate to="/auth/login" />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
