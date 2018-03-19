<template>
	<div id="news">
		<div class="news-wrapper">
			<div class="news-content">
				<div class="content-inner">
					<p class="article-title">开门红</p>
					
					<p class="article-p">
						俗语云：“初八宜点灯，众星下凡尘”
					</p>
					<img class="news-img-0" :src="imgSrc1"/>
					<p class="article">
						对联两边贴，映出新前景。爆竹声声响，鸣出好运道。
					</p>
					<img class="news-img-0" :src="imgSrc2"/>
					<p class="article">
						2018年正月初八8：38，湖南兆丰光电大门前响起了爆竹声，今天我们正式开工啦~！需要LED无影灯、观片灯、视力表灯箱、净化灯等产品的朋友们，可以放肆砸单过来了哟~！
					</p>
					<img class="news-img-0" :src="imgSrc3"/>
					<img class="news-img-0" :src="imgSrc4"/>
					
					<p class="article">
						女同事们都不约而同地身着红装现身，红衣姑娘来合影，真正的开门红哟~！烟雾缭绕中下凡而来的仙女们······ 
					</p>
					<img class="news-img-0" :src="imgSrc5"/>
					
					<p class="article">
						人手一个开工大红包，你红我红大家红！“红”运当头，大展“红”图，“红”红火火，“红”福齐天！
					</p>
					<img class="news-img-0" :src="imgSrc6"/>
					<p class="article">
						新年新景新年新，福送福友福送福。
					</p>
					<img class="news-img-0" :src="imgSrc7"/>
					<p class="article">
						祝湖南兆丰光电，2018年生意红火！宏图大展！财源广进！前景无量！
					</p>
					<p class="article">
						祝同事和朋友们，2018年开心快乐！万事如意！心想事成！前程似锦！
					</p>
					<p class="article">
						祝所有人：心顺气顺事顺百业和顺无不一帆风顺，乐意快意满意万事如意尽揽四海生意!
					</p>
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
	    	newsTitle: "兆丰光电引领LED医用照明，隆重亮相第78届中国国际医疗器械（秋季）博览会",
	    	newsBanner:"",
	    	imgList:[],
		    imgSrc1:require('../assets/news/news5/news5000001.png'),	
		    imgSrc2:require('../assets/news/news5/news5000002.png'),	
		    imgSrc3:require('../assets/news/news5/news5000003.png'),	
		    imgSrc4:require('../assets/news/news5/news5000004.png'),	
		    imgSrc5:require('../assets/news/news5/news5000005.png'),	
		    imgSrc6:require('../assets/news/news5/news5000006.png'),	
		    imgSrc7:require('../assets/news/news5/news5000007.png'),	
	    	newsList:{
	    		"01001":{
	    			newsTitle:"兆丰光电引领LED医用照明，隆重亮相第78届中国国际医疗器械（秋季）博览会",
		    		imgList:[
//		    			{src:require('../assets/news/news01001/news01001001.jpg')},
//		    			{src:require('../assets/news/news01001/news01001004.jpg')},
//		    			{src:require('../assets/news/news01001/news01001003.jpg')},
//		    			{src:require('../assets/news/news01001/news01001002.jpg')},
//		    			{src:require('../assets/news/news01001/news01001008.jpg')},
//		    			{src:require('../assets/news/news01001/news01001006.jpg')},
//		    			{src:require('../assets/news/news01001/news01001013.jpg')},
//		    			{src:require('../assets/news/news01001/news01001005.jpg')},
//		    			{src:require('../assets/news/news01001/news01001010.jpg')},
//		    			{src:require('../assets/news/news01001/news01001007.jpg')},
//		    			{src:require('../assets/news/news01001/news01001009.jpg')},
//		    			{src:require('../assets/news/news01001/news01001012.jpg')},

		    		]
	    		}
	    	}
	  	}
	}
	,
	created(){
//		var vm=this;
//		var newsVal=vm.$route.params.id;
//		vm.newsChange(newsVal);
//		eventbus.$on('routeChange',function(val){
//			vm.newsChange(val)
//		})
	},
	methods:{
//		newsChange:function(val){
//			this.imgList=this.newsList[val].imgList;
//		}
	}
}
</script>

<style>
#news {
	padding-top: 82px;
	min-width: 1200px;
	margin: 0 auto;
}
.article-title {
	padding: 50px;
	text-align: center;
	font-size: 40px;
}
.shi-p {
	text-indent: 2em;
	text-align: center;
	font-size: 20px;
}
.news-banner {
	margin-bottom: 30px;
	padding-top: 40px;
	height: 500px;
	background:url(../css/img/news/news-banner.jpg)  no-repeat center #333;
}
.news-banner .news-banner-title {
	margin: 0 auto;
	padding: 40px;
	width: 1000px;
	height: 233px;
	line-height: 60px;
	text-align: center;
	font-size: 38px;
	color: #fff;
	background: rgba(0,0,0,.4);
}
.news-content {
	background: #fff;
}
.content-inner {
	margin: 0 auto;
	padding: 40px 0;
	width: 920px;
	line-height: 28px;
	font-size: 14px;
	text-indent: 2em;
}
.content-inner .article {
	padding-right: 30px;
}
.content-inner img {
	border: 0;
	font-size: 0;
	/*width: 560px;*/
}
.content-inner img.imgLst {
	display: block;
	margin:0 auto ; 
	width: auto;
	/*max-width: 1000px;*/
	
}
.content-inner .news-img-0 {
	width: 100%;
	display: block;
	margin: 0 auto;
}
.content-inner .news-img-1 {
	display: inline-block;
	width: 48%;
}
.content-inner .news-img-2 {
	height: 708px;
	width: 550px;
}
.content-inner .news-img-3 {
	width: 100%;
}
.content-inner .news-img-4,.content-inner .news-img-5 {
	width: 49.5%;
}
.content-inner .news-img-6,.content-inner .news-img-7,.content-inner .news-img-8,.content-inner .news-img-9 {
	height: 530px;
	width: 49.5%;
}
.content-inner .news-img-10,.content-inner .news-img-11 {
	height: 530px;
	width: 49.5%;
}
.content-inner .news-img-12 {
	width: 100%;
}
</style>