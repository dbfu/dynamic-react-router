// 模拟获取管理员菜单
export const getAdminMenus = () => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve([
        {
          name: 'page1',
          route: '/page1',
          filePath: '/page1/index.tsx',
        },
        {
          name: 'page2',
          route: '/page2',
          filePath: '/page2/index.tsx',
        },
        {
          name: 'page3',
          route: '/page3',
          filePath: '/page3/index.tsx',
        },
      ]);
    }, 1000);
  });
};

// 模拟获取普通菜单
export const getUserMenus = () => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve([
        {
          name: 'page1',
          route: '/page1',
          filePath: '/page1/index.tsx',
        },
      ]);
    }, 1000);
  });
};
