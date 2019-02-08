import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routers'

/*
import Ninjas from './Ninjas.vue'
Vue.component('ninjas', Ninjas);
*/
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});


/*###  Customizar una directiva ###*/
Vue.directive('rainbow',{
  bind(el, binding, vnode){
    el.style.color = "#"+Math.random().toString().slice(2,8);
  }
});
/* ############################### */
/* #####  Customizar Filtros ##### */
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});
/* ############################### */


export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
