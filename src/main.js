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
import news1 from './component/news1.vue';
import news2 from './component/news2.vue';
import news3 from './component/news3.vue';
import news4 from './component/news4.vue';
import news5 from './component/news5.vue';
import news6 from './component/news6.vue';
import news7 from './component/news7.vue';
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
      component: news1
    }
    ,
    {
      path: '/news/arctile2',
      component: news2
    }
    ,
    {
      path: '/news/arctile3',
      component: news3
    },
    {
      path: '/news/arctile4',
      component: news4
    },
    {
      path: '/news/arctile5',
      component: news5
    },
    {
      path: '/news/arctile6',
      component: news6
    }
    ,
     {
      path: '/news/arctile7',
      component: news7
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
