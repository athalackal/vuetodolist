import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' 
import moment from 'moment'

Vue.use(VueRouter)
  Vue.prototype.$moment = moment;
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/countdown',
    name: 'Countdown',
    component: () => import('../views/Countdown.vue')
  },
  {
    path: '/reminders',
    name: 'Reminder',
    component: () => import('../views/Reminders.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
