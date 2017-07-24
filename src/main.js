import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
import index from './component/index.vue';
import about from './component/about.vue';
import service from './component/service.vue';
import commonHeader from './component/commonHeader.vue';
const arctile={ template: '<div><h2>404</h2></div>' };
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/about/',
      component: about
    },
    {
      path: '/service/',
      component: service
    },
    {
      path: '/second',
      component: commonHeader
    },
    {
      path: '/news/arctile/',
      component: arctile
    }
    ,
    { 
    	path: '*',
    	component: arctile
    }
    
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
