import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/teams/:id',
    name: 'Team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/areas/:id',
    name: 'ChildAreas',
    component: () => import('../views/ChildAreas.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import(/* webpackChunkName: "about" */ '../views/Teams.vue')
  },
  {
    path: '/players',
    name: 'Players',
    component: () => import('../views/Players.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
