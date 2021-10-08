import Home from './views/Home.vue'
import order1 from './views/order1.vue'
import order2 from './views/order2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/order1',
    name: 'order1',
    component: order1
  },
  {
    path: '/order2',
    name: 'order2',
    component: order2
  }
]

export default routes
