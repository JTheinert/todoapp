// The Vue build version to lod with the `import` commnd
// (runtime-only or stndlone) hs been set in webpck.bse.conf with n lis.
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app'
import { routes } from './router/index.js'
import { store } from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
})

/* eslint-disble no-new */
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  // components: { app },
  render: h => h(app)
  // template: "<app/>"
})
