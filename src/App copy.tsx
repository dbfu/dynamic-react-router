import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import NotFound from './NotFound'
import Layout from './Layout'
import { lazy } from 'react'

const router = createBrowserRouter([{
  path: '/',
  Component: Layout,
  children: [{
    path: '/page1',
    Component: lazy(() => import('./pages/page1/index.tsx')),
  }, {
    path: '/page2',
    Component: lazy(() => import('./pages/page2/index.tsx')),
  }, {
    path: '/page3',
    Component: lazy(() => import('./pages/page3/index.tsx')),
  }, {
    path: '/',
    element: <Navigate to="/page1" />,
  }],
}, {
  path: '*',
  Component: NotFound,
}])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App



