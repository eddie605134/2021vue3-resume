import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skill/:skill?',
    name: 'Skill',
    component: () => import(/* webpackChunkName: "Skill" */ '../views/Skill.vue'),
    redirect: '/skill/1/opition',
    children: [
      {
        path: "opition",
        name: "Skill_opition",
        // alias: '',
        component: () => import('../views/Skill/_opition')
      },
      {
        path: '/:pathMatch(.*)',
        redirect: Home
      }
    ]
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: Home
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
