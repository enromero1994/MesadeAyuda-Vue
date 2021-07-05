import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/signin',
        name: 'Signin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/auth/Signin.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/auth/Signup.vue')
    },
    {
        path: '/request/:id',
        name: 'Request',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/main/Request.vue')
    },
    {
        path: '/request/:id/:consulta',
        name: 'Form',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/main/Form.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        // lazy-loaded
        component: () => import('../views/users/Profile.vue')
      },
      {
        path: '/admin',
        name: 'admin',
        // lazy-loaded
        component: () => import('../views/users/BoardAdmin.vue')
      },
      {
        path: '/mod',
        name: 'moderator',
        // lazy-loaded
        component: () => import('../views/users/BoardModerator.vue')
      },
      {
        path: '/user',
        name: 'user',
        // lazy-loaded
        component: () => import('../views/users/BoardUser.vue')
      },
      {
        path: '/admin/categories',
        name: 'category',
        // lazy-loaded
        component: () => import('../views/users/admin/Category.vue')
      },
      {
        path: '/user/missolicitudes',
        name: 'myrequest',
        // lazy-loaded
        component: () => import('../views/users/user/MyRequest.vue')
      },
      {
        path: '/agent/solicitudes',
        name: 'request',
        // lazy-loaded
        component: () => import('../views/users/agent/Request.vue')
      }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router