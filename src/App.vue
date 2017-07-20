<template>
  <div id="app">
  	<commonHeader></commonHeader>

    <div class="banner" v-bind:style="bannerStyle">
    	<div class="banner-center">
    		<ul class="banner-nav">
	    		<template v-for="(item,index) in banner.list">
	    			<li class="banner-item" v-bind:class="'item' + index"  @click="bannerChoose(item.style)" >{{index}}</li>

    			</template>
    		</ul>
    	</div>
    </div>
    <div class="auto banner-bottom">
    	<div class="content">
	    	<a class="banner-more-link" href="javascript:;">
	    		 更多&gt;&nbsp;&nbsp;&nbsp;
	    	</a>
    	</div>
    </div>
    <div class="auto">
    	<div class="content news-content clearfix">
    		<div class="news-item-content news-item-1">
    			<div class="news-item-title">
    				新品推荐&nbsp;&nbsp;&nbsp;&nbsp;<span class="news-item-title-english">New Arrivals</span>
    			</div>
    			<div class="product-bg">
    				<p class="product-title">ZG-2B</p>
    				<p class="product-sub-title">超薄液晶LED观光灯</p>
    			</div>
    		</div>
    		<div class="news-item-content news-item-2">
    			<div class="news-item-title">
    				新闻资讯&nbsp;&nbsp;&nbsp;&nbsp;<span class="news-item-title-english">News</span>
    			</div>
    		</div>
    		<div class="news-item-content news-item-3">
    			<div class="news-item-title">
    				用户案例&nbsp;&nbsp;&nbsp;&nbsp;<span class="news-item-title-english">User Case</span>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import commonHeader from './component/commonHeader.vue'
export default {
  name: 'app',
  data () {
    return {

    	activeColor: 'red',
  		fontSize: 30,

    	num:"",
      msg: 'Welcome to Your Vue.js App',
      bannerStyle: {
      	backgroudImage:'url(/src/css/img/banner-bg-1.jpg)'
      	
      },
      banner:{
      	list:[
      		{
      			name:"p1",
      			style:"url(/src/css/img/banner-bg-1.jpg)"
      		},{
      			name:"p1",
      			style:"url(/src/css/img/banner-bg-2.jpg)"
      		},{
      			name:"p1",
      			style:"url(/src/css/img/banner-bg-3.jpg)"
      		},{
      			name:"p1",
      			style:"url(/src/css/img/banner-bg-4.jpg)"
      		},{
      			name:"p1",
      			style:"url(/src/css/img/banner-bg-5.jpg)"
      		}
      	]
      }
    }
  },
  components: { commonHeader },
  
	methods:{

		bannerChoose(style){
			var vm = this;
vm.activeColor="black";
			vm.bannerStyle.backgroundImage=style;
			console.log(vm.bannerStyle.backgroundImage)
			

		}
		
	}
  
}
</script>

<style>
#app {
	min-width: 1200px;
	margin: 0 auto;
}
.banner {
	width: 100%;
	height: 577px;

	background:url(css/img/banner-bg-1.jpg)  no-repeat center #eee5dc;

}
.banner-center {
	position: relative;
	margin: 0 auto;
	width: 1200px;
	height: 100%;
}
.banner-nav {
	position: absolute;
	right: 100px;
	bottom: 30px;

}
.banner-item {
	float: left;
	

}
.banner-bottom {
	height: 80px;
	background-color: #323232;
}
.banner-more-link {
	float: right;	
	margin: 0 auto;
	width: 1200px;
	height: 80px;
	text-align: right;
	font-size: 24px;
	line-height: 80px;
	color: #fff;
}
.news-content {
	padding: 20px 30px;
}
.news-item-content {
	float: left;
	height: 220px;
	background-color: #fff;
}
.news-item-content.news-item-1 {
	margin-right: 12px;
	width: 372px;
}
.news-item-content.news-item-2 {
	margin-right: 12px;
	width: 446px;
}
.news-item-content.news-item-3 {
	width: 290px;
}
.news-item-title {
	padding-left: 30px;
	height: 36px;
	line-height: 44px;
	font-size: 16px;
	background-color: #ef7d18;
	color: #fff;
}
.news-item-title-english {
	font-size: 12px;
	font-style:oblique;
}
.product-bg {
	text-align: right;
	margin-top: 40px;
	width: 100%;
	height: 146px;
	background: url(css/img/product-bg-01.jpg)  no-repeat 170px 0;
}
.product-title,.product-sub-title {
	width: 170px;
}
.product-title {
	padding-top: 14px;
	line-height: 24px;
	font-size: 20px;
}
.product-sub-title {
	font-size: 14px;
}
</style>
