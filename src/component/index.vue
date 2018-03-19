<template>
	<div id="index">
		<div class="banner" v-bind:class="'banner-' + num">
			<a :href="banner.mainBanner[bannerNum].url" class="banner-link"></a>
		    <div class="banner-center">
	    		<ul class="banner-nav clearfix">
		    		<template v-for="(item,index) in banner.list">
		    			<li class="banner-item"
		    				@click="bannerChoose(item.num)"
		    				:class=" [{ 'active' : num == index+1},'item' + (index+1)]" ></li>
	    			</template>
	    		</ul>
	    	</div>
		</div>
		<div class="hide">
			<div class="banner banner-1"></div>
			<div class="banner banner-2"></div>
			<div class="banner banner-3"></div>
			<div class="banner banner-4"></div>
			<div class="banner banner-5"></div>
		</div>
	    <div class="auto banner-bottom">
	    	<div class="content">
		    	<a class="banner-more-link" href="/product/list01">
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
	    			<a href="/product/list02001" class="product-bg">
	    				<p class="product-title">ZG-2B</p>
	    				<p class="product-sub-title">超薄液晶LED观片灯</p>
	    			</a>
	    		</div>
	    		<div class="news-item-content news-item-2">
	    			<div class="news-item-title">
	    				新闻资讯&nbsp;&nbsp;&nbsp;&nbsp;<span class="news-item-title-english">News</span>
	    			</div>
	    			<ul class="mews-item-2-left">
	    				<template v-for="item in news.list">
	    					<li class="news-item-link">
		    					<a :href="item.url">
		    						{{item.title}}
		    					</a>
	    					</li>
	    				</template>
	    			</ul>
	    		</div>
	    		<div class="news-item-content news-item-3">
	    			<div class="news-item-title">
	    				用户案例&nbsp;&nbsp;&nbsp;&nbsp;<span class="news-item-title-english">User Case</span>
	    			</div>
	    			<a class="news-item-3-pic" href="javascript:;">
	    				
	    			</a>
	    		</div>
	    	</div>
	    	
	    </div>
	</div>
	
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    	activeColor: 'red',
  		fontSize: 30,
    	num:1,
    	bannerNum:"banner1",
      msg: 'Welcome to Your Vue.js App',
      banner:{
      	mainBanner:{
      		banner1:{
      			url:"/product/list01"
      		},
      		banner2:{
      			url:"/product/list01001"
      		},
      		banner3:{
      			url:"/product/detail04001001"
      		},
      		banner4:{
      			url:"/product/list02"
      		},
      		banner5:{
      			url:"/product/list03"
      		}
      	},
      	list:[
      		{
      			name:"p1",
      			num:1,
      			active:true,
      			class:'item1'
      		},{
      			name:"p1",
      			num:2,
      			active:false,
      			class:'item2'
      		},{
      			name:"p1",
      			num:3,
      			active:false,
      			class:'item3'
      		},{
      			name:"p1",
      			num:4,
      			active:false,
      			class:'item4'
      		},{
      			name:"p1",
      			num:5,
      			active:false,
      			class:'item5'
      		}
      	]
      },
      news:{
      	list:[
      		{
      			title:"美好三月，兆丰与你相约",
      			url:"/news/arctile7"
      		}
      		,
      		{
      			title:"招聘简章",
      			url:"/news/arctile6"
      		}
      		,
      		{
      			title:"开门红",
      			url:"/news/arctile5"
      		}
      		,
      		{
      			title:"红红火火兆丰年",
      			url:"/news/arctile4"
      		}
      		,
      		{
      			title:"参观学习，砥砺前行",
      			url:"/news/arctile3"
      		}
//    		,
//    		{
//    			title:"印度尼西亚客户来访",
//    			url:"/news/arctile2"
//    		}
//    		,
//			{
//    			title:"湖南兆丰与你相约明月山",
//    			url:"/news/arctile1"
//    		}
//			,
//			{
//    			title:"兆丰光电引领LED医用照明，隆重亮相第78届中国国际医疗器械（秋季）博览会",
//    			url:"/news/arctile"
//    		}
      	]
      }
    }
  },
//components: { commonHeader },
	created:function(){
		var vm=this;
		vm.intervalId=setInterval(function(){
			if(vm.num<5){
				vm.num=vm.num+1;
				vm.bannerNum="banner"+vm.num
			}else {
				vm.num=1;
				vm.bannerNum="banner"+vm.num
			}
		},5000)
	},
	methods:{

		bannerChoose(num){
			var vm = this;
			vm.num=num;
			clearInterval(vm.intervalId);
			vm.intervalId=setInterval(function(){
				if(vm.num<5){
					vm.num=vm.num+1;
					vm.bannerNum="banner"+vm.num
				}else {
					vm.num=1;
					vm.bannerNum="banner"+vm.num
				}
			},5000)
		}
		
	}
  
}
</script>

<style>
#index {
	padding-top: 82px;
	min-width: 1200px;
	margin: 0 auto;
}
.banner {
	position: relative;
	display: block;
	padding-top: 400px;
	width: 100%;
	height: 484px;
	background:url(../css/img/index/banner-bg-1.jpg)  no-repeat center #eee5dc;
	transition: all 1s; 
}
.banner-link {
	position: absolute;
	top: 0;
	display: block;
	width: 100%;
	height: 484px;
	z-index: 1;
}
.banner-1 {
	background:url(../css/img/index/banner-bg-1.jpg)  no-repeat center #eee5dc;
}
.banner-2 {
	background:url(../css/img/index/banner-bg-2.jpg)  no-repeat center #fff;
}
.banner-3 {
	background:url(../css/img/index/banner-bg-3.jpg)  no-repeat center #fff;
}
.banner-4 {
	background:url(../css/img/index/banner-bg-4.jpg)  no-repeat center #fff;
}
.banner-5 {
	background:url(../css/img/index/banner-bg-5.jpg)  no-repeat center #fff;
}
.banner-center {
	z-index: 2;
	position: relative;
	margin: 0 auto;
	width: 1200px;
	height: 52px;
}
.banner-nav {
	position: absolute;
	right: 100px;
	bottom: 0px;

}
.banner-item {
	float: left;
	width: 56px;
	height: 52px;
	background-color: #ccc;
	margin-right: 10px;
	background: url(../css/img/index/banner-item-01.png) no-repeat center;
	cursor: pointer;
}
.banner-item:hover,.banner-item.active {
	position: relative;
	top: -4px;
}
.banner-item.item1 {
	background-image: url(../css/img/index/banner-item-01.png);
}
.banner-item.item1:hover,.banner-item.item1.active {
	background-image: url(../css/img/index/banner-item-act-01.png);
}
.banner-item.item2 {
	background-image: url(../css/img/index/banner-item-02.png);
}
.banner-item.item2:hover,.banner-item.item2.active {
	background-image: url(../css/img/index/banner-item-act-02.png);
}
.banner-item.item3 {
	background-image: url(../css/img/index/banner-item-03.png);
}
.banner-item.item3:hover,.banner-item.item3.active {
	background-image: url(../css/img/index/banner-item-act-03.png);
}
.banner-item.item4 {
	background-image: url(../css/img/index/banner-item-04.png);
}
.banner-item.item4:hover,.banner-item.item4.active {
	background-image: url(../css/img/index/banner-item-act-04.png);
}
.banner-item.item5 {
	background-image: url(../css/img/index/banner-item-05.png);
}
.banner-item.item5:hover,.banner-item.item5.active {
	background-image: url(../css/img/index/banner-item-act-05.png);
}
.banner-bottom {
	height: 40px;
	background-color: #323232;
}
.banner-more-link {
	float: right;	
	margin-right: 120px;
	width: 1200px;
	height: 40px;
	text-align: right;
	font-size: 14px;
	line-height: 40px;
	color: #fff;
}
.news-content {
	margin: 0 auto;
	padding: 20px 0 0;
	width: 980px;
}
.news-item-content {
	float: left;
	height: 186px;
	background-color: #fff;
}
.news-item-content.news-item-1 {
	margin-right: 12px;
	width: 320px;
}
.news-item-content.news-item-2 {
	margin-right: 12px;
	width: 375px;
	background: url(../css/img/index/news-bg.jpg) no-repeat 208px 58px #fff;
}
.news-item-content.news-item-3 {
	width: 246px;
}
.news-item-title {
	padding-left: 30px;
	height: 30px;
	line-height: 34px;
	font-size: 16px;
	background-color: #ef7d18;
	color: #fff;
}
.news-item-title-english {
	font-size: 12px;
	font-style:oblique;
}
.product-bg {
	display: block;
	text-align: right;
	margin-top: 40px;
	width: 100%;
	height: 146px;
	background: url(../css/img/index/product-bg-01.jpg)  no-repeat 146px 0;
	background-size: 104px 73px;
}
.product-title,.product-sub-title {
	width: 140px;
}
.product-title {
	padding-top: 6px;
	line-height: 24px;
	font-size: 16px;
	font-weight: bold;
}
.product-sub-title {
	font-size: 12px;
}
.mews-item-2-left {
	margin: 20px 0 0 30px;
	width: 170px;
}
.news-item-link {
	position: relative;
	padding-left: 10px;
	width: 100%;
}
.news-item-link:before {
	position: absolute;
	left: -2px;
	top: 8px;
	content: "*";
	display: block;
	width: 6px;
	height: 6px;
}
.news-item-link a{
	display: block;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 28px;
	line-height: 28px;
	font-size: 12px;
	color: #333;
}
.news-item-3-pic {
	display: block;
	margin-top: 14px;
	margin-left: 48px;
	width: 181px;
	height: 128px;
	background: url(../css/img/index/case-bg.jpg) no-repeat center;
}
</style>