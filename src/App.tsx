import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import NotFound from './NotFound'
import Layout from './Layout'
import { lazy, useEffect, useState } from 'react'
import { getAdminMenus, getUserMenus } from './service';
import { RouterContext } from './router-context';

const modules = import.meta.glob('./pages/*/index.tsx');
const components = Object.keys(modules).reduce<Record<string, any>>((prev, cur) => {
  prev[cur.replace('./pages', '')] = modules[cur];
  return prev;
}, {}) as any;

export const router = createBrowserRouter([{
  path: '/',
  Component: Layout,
  children: [],
}, {
  path: '*',
  Component: NotFound,
}]);


function App() {
  const [menus, setMenus] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminMenus().then((adminMenus: any) => {
      setMenus(adminMenus);
      setLoading(false);

      // 获取菜单后动态添加路由
      router.routes[0].children = adminMenus.map((menu: any) => ({
        path: menu.route,
        Component: lazy(components[menu.filePath])
      }));
    })
  }, []);

  if (loading) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <RouterContext.Provider value={{ menus }}>
      <RouterProvider router={router} />
    </RouterContext.Provider>
  )
}

export default App



