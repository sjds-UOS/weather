import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home')
const CityChoose = () => import('@/views/CityChoose')
const About = () => import('@/views/About')
const Day7 = ()=>import('@/components/child/Day7.vue')


// import Home from '@/views/Home'
// import CityChoose from '@/views/CityChoose'
// import About from '@/views/About'
// import Day7 from '@/components/child/Day7.vue'


Vue.use(VueRouter)

// const createWebHashHistory = VueRouter.createWebHashHistory
// const createWebHistory = VueRouter.createWebHistory
// const router = createRouter({
  
//   routes,
// });

const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/CityChoose',
    name: 'CityChoose',
    component: CityChoose
  },
  {
    path: '/Day7',
    name: 'Day7',
    component: Day7
  },
]

const router = new VueRouter({
  mode: "hash",
  // history: process.env.IS_ELECTRON? createWebHashHistory(process.env.BASE_URL):createWebHistory(process.env.BASE_URL) ,
  routes
})

export default router
