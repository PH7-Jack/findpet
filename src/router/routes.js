
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index') },
      { path: '/pet/:slug', component: () => import('pages/PetDetails') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/auth/login', component: () => import('pages/auth/Login') },
      { path: '/auth/signup', component: () => import('pages/auth/Signup') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404')
  })
}

export default routes
