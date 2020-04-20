export const getMenuData: any[] = [
  {
    category: true,
    title: 'Dashboards',
  },
  {
    title: 'Dashboards',
    key: 'dashboards',
    icon: 'fe fe-home',
    count: 6,
    children: [
      {
        title: 'Empty Page',
        key: 'dashboardAnalytics',
        url: '/dashboard/analytics',
      },
    ],
  },
  {
    category: true,
    title: 'Components',
  },
  {
    title: 'Bootstrap',
    key: 'bootstrap',
    icon: 'fe fe-bookmark',
    url: '/ui-kits/bootstrap',
  },
  {
    title: 'Ant Design',
    key: 'antDesign',
    icon: 'fe fe-bookmark',
    url: '/ui-kits/antd',
  },
]
