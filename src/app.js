import hljs from './highlight';
hljs.configure({});
hljs.initHighlightingOnLoad();
window.hljs = hljs;

import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import store from './vuex/store';
import App from './components/App.vue'
import Home from './components/views/Home.vue'
import About from './components/views/About.vue'

import 'whatwg-fetch';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
})
router.beforeEach((route, redirect, next) => {
  // window.updateBodyURL(route.path)
  next()
})
router.afterEach(_ => {
  store.dispatch('hideMenu')
  window.scrollTo(0,0)
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('app')
