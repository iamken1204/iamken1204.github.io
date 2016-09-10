import hljs from './highlight';
hljs.configure({});
hljs.initHighlightingOnLoad();
window.hljs = hljs;

import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import store from './vuex/store';
import App from './components/App.vue'

import 'whatwg-fetch';

new Vue({
  el: 'app',
  store,
  render: h => h(App)
})
