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
import join from './component/join.vue';
import productList from './component/productList.vue';
import productDetail from './component/productDetail.vue';
import commonHeader from './component/commonHeader.vue';
import news from './component/news.vue';
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
      path: '/product/list:id',
      component: productList
    },
    {
      path: '/product/detail:id',
      component: productDetail
    },
    {
      path: '/join/',
      component: join
    },
    {
      path: '/news/arctile',
      component: news
    }
    ,
    {
      path: '/news/arctile1',
      component: news
    }
    ,
    { 
    	path: '*',
    	component: index
    }
    
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
window.eventbus=new Vue();
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
