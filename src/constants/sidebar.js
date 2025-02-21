import { PAGE_ROUTES } from './pageRoutes'

export const SIDEBAR_MENUS = [
  {
    name: 'داشبورد',
    link: PAGE_ROUTES.main.dashboard,
    key: 'dashboard',
    icon: 'mage:dashboard-2',
  },
  {
    name: 'ربات ها',
    link: PAGE_ROUTES.main.robots,
    key: 'robots',
    icon: 'mage:robot-appreciate',
  },
  {
    name: 'داده های آماده',
    link: PAGE_ROUTES.main.readyData,
    key: 'readyData',
    icon: 'majesticons:data-line',
  },
  {
    name: 'درخواست های باز',
    link: PAGE_ROUTES.main.openRequests,
    key: 'openRequests',
    icon: 'clarity:flow-chart-line',
  },
  {
    name: 'اشتراک',
    link: PAGE_ROUTES.main.subscription,
    key: 'subscription',
    icon: 'lets-icons:bag',
  },
  {
    name: 'مالی',
    link: PAGE_ROUTES.main.finance,
    key: 'finance',
    icon: 'famicons:wallet-outline',
  },
  {
    name: 'پشتیبانی',
    link: PAGE_ROUTES.main.support,
    key: 'support',
    icon: 'hugeicons:customer-support',
  },
  {
    name: 'تنظیمات',
    link: PAGE_ROUTES.main.setting,
    key: 'setting',
    icon: 'uil:setting',
  },
]
