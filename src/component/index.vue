<template>
	<div id="index">
		<div class="banner" v-bind:class="'banner-' + num">
	    	<div class="banner-center">
	    		<ul class="banner-nav">
		    		<template v-for="(item,index) in banner.list">
		    			<li class="banner-item" v-bind:class="'item' + index"  @click="bannerChoose(item.num)" >{{index}}</li>
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
export default {
  name: 'app',
  data () {
    return {
    	activeColor: 'red',
  		fontSize: 30,
    	num:1,
      msg: 'Welcome to Your Vue.js App',
      banner:{
      	num:1,
      	list:[
      		{
      			name:"p1",
      			num:1
      		},{
      			name:"p1",
      			num:2
      		},{
      			name:"p1",
      			num:3
      		},{
      			name:"p1",
      			num:4
      		},{
      			name:"p1",
      			num:5
      		}
      	]
      }
    }
  },
//components: { commonHeader },
	created:function(){
		var vm=this;
		setInterval(function(){
			if(vm.num<5){
				vm.num=vm.num+1;
			}else {
				vm.num=1;
			}
		},5000)
	},
	methods:{

		bannerChoose(num){
			var vm = this;
			vm.num=num;
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
	height: 484px;
	background:url(../css/img/banner-bg-1.jpg)  no-repeat center #eee5dc;
}
.banner-1 {
	background:url(../css/img/banner-bg-1.jpg)  no-repeat center #eee5dc;
}
.banner-2 {
	background:url(../css/img/banner-bg-2.jpg)  no-repeat center #fff;
}
.banner-3 {
	background:url(../css/img/banner-bg-3.jpg)  no-repeat center #fff;
}
.banner-4 {
	background:url(../css/img/banner-bg-4.jpg)  no-repeat center #fff;
}
.banner-5 {
	background:url(../css/img/banner-bg-5.jpg)  no-repeat center #eee5dc;
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
	background: url(../css/img/product-bg-01.jpg)  no-repeat 170px 0;
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