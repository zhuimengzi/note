import Vue from 'vue'
import VueRouter from 'vue-router'
var List = require('../components/list/list.vue');

Vue.use(VueRouter);

const routes = [
  {path:'/', redirect:'/tab/all'},
  {path:'/tab/:id', component: List}
];

const router = new VueRouter({
  linkExactActiveClass:'current-tab',
  routes
});

export {
  router
};
