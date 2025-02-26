import { PAGE_ROUTES } from '@/constants/pageRoutes'
import { LAYOUTS } from '../constants/layouts'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: PAGE_ROUTES.login,
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { layout: LAYOUTS.login },
  },
  {
    path: PAGE_ROUTES.main.dashboard,
    component: () => import('@/views/main/DashboardView.vue'),
    meta: {
      layout: LAYOUTS.main,
      //  requiresAuth: true
    },
  },
  {
    path: PAGE_ROUTES.main.robots,
    component: () => import('@/views/main/DashboardView.vue'),
    meta: {
      layout: LAYOUTS.main,
      //  requiresAuth: true
    },
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for 404
    redirect: PAGE_ROUTES.main.dashboard,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Optional: Add navigation guards for authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') // Check if the user is authenticated
  if (to.meta.requiresAuth && !isAuthenticated) {
    next(PAGE_ROUTES.login) // Redirect to login if the route requires authentication
  } else {
    next()
  }
})

export default router
