import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Gestion from '../views/Gestion.vue'
import Doctors from '../views/Doctors.vue'
import Pacientes from '../views/Pacientes.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Gestion',
    name: 'Gestion',
    component: Gestion
  },
  {
    path: '/Pacientes',
    name: 'Pacientes',
    component: Pacientes
  },
  {
    path: '/Doctors',
    name: 'Doctors',
    component: Doctors
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
