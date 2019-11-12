import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next)=>{
  console.log('beforeEach',to,from)
  next()
})

router.afterEach((to)=>{
  console.log('afterEach',to)
})

export default router;
