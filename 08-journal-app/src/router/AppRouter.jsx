import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthRoutes, childAuthRoutes } from '../auth/routes/AuthRoutes';
import { childJournalRoutes, JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/auth/*',
      element: <AuthRoutes />,
      children: childAuthRoutes,
    },
    {
      path: '/',
      element: <JournalRoutes />,
      children: childJournalRoutes,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
