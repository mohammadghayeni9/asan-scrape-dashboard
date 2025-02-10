import { LAYOUTS } from '../constants/layouts'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { layout: LAYOUTS.login },
  },
  // {
  //   path: '/dashboard',
  //   component: () => import('@/views/dashboard/Dashboard.vue'),
  //   meta: { layout: LAYOUTS.dashboard, requiresAuth: true },
  // },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for 404
    redirect: '/login',
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
    next('/login') // Redirect to login if the route requires authentication
  } else {
    next()
  }
})

export default router
