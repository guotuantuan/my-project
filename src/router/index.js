import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/h2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/h1',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  mode: 'history'
})
