import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const view = (component) => import(`@/views/${component}/index`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Desktop',
      component: () => view('desktop')
    }
  ]
})
