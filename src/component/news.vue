<template>
	<div id="news">
		<div class="news-wrapper">
			<div class="news-banner">
				<div class="news-banner-title">
					{{newsTitle}}
				</div>
			</div>
			<div class="news-content">
				<div class="content-inner">
					2017年11月1日第七十八届中国国际医疗器械（秋季）博览会在昆明滇池国际会展中心胜利闭幕！湖南兆丰光电科技有限公司如邀参加展会，展示了为医用照明量身打造的最新LED产品，巩固了已有的合作关系，还发掘了大批潜在客户，开拓了更大的市场。本次展会阵容空前强大，数万家医疗器械行业巨头和知名品牌在这里汇聚，展出内容全面涵盖了包括医用影像、体外诊断，电子、光学、急救、康复护理、移动医疗、医疗服务、医疗信息技术、手术室解决方案、可穿戴等上万种产品，直接并全面服务于医疗器械行业的从源头到终端整条医疗产业链。
					<br />
					<br />
					<img class="news-img-1" :src="imgSrc1"/>
					<img class="news-img-2" :src="imgSrc2"/>
					<img class="news-img-3" :src="imgSrc3"/>
					<br />
					<br />
					湖南兆丰光电经过精心准备，凭借精湛的技术水准，高质量的产品再次成为同行业中一大亮点。匠心独运的设计与优异的产品（例如我司最新研发出的LED嵌入式观片灯和LED手术无影灯以及LED视力表），不仅吸引了众多中外客商的驻足观看与咨询洽谈，而且到现场新老客户的一致认同和称赞。前来咨询的求购商络绎不绝，展会期间接待俄罗斯，印度、孟加拉国，菲律宾、马来西亚等国家客商，经过湖南兆丰光电工作人员的接洽，众多客户大为满意，更有一些现场达成合作的客户。国外客户现场洽谈合作：
					<br />
					<br />
					<img class="news-img-4" :src="imgSrc4"/>
					<img class="news-img-5" :src="imgSrc5"/>
					<br />
					<br />
					展位风采：
					<br />
					<br />
					<img class="news-img-6" :src="imgSrc6"/>
					<img class="news-img-7" :src="imgSrc7"/>
					<img class="news-img-8" :src="imgSrc8"/>
					<img class="news-img-9" :src="imgSrc9"/>
					<br />
					<br />
					员工风采：
					<br />
					<br />
					<img class="news-img-10" :src="imgSrc10"/>
					<img class="news-img-11" :src="imgSrc11"/>
					<img class="news-img-12" :src="imgSrc12"/>
					本次展会，公司全体员工积极的为筹展献计献策，各部门积极配合与付出，展示了湖南兆丰员工的良好团队协作精神，这是一次行业的盛宴，更是一次收获之旅，湖南兆丰光电科技有限公司在医疗器械行业近年来取得了长远的发展，成绩斐然，有着一定的品牌积淀，发展稳健，凭借着良好的市场运作能力，我们已经在全国各地和海外拥有了广阔市场，虽然如此，但我们更知道“任重道远”。我们深信在公司领导的英明带领下，在湖南兆丰光团队的不懈努力下，湖南兆丰光电一定会再创新高！继续辉煌！
					<br />
					<br />
					<img class="imgLst" :src="imgLastSrc" />
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
		    imgSrc1:require('../assets/news/news01001/news01001001.jpg'),	
		    imgSrc2:require('../assets/news/news01001/news01001002.jpg'),	
		    imgSrc3:require('../assets/news/news01001/news01001003.jpg'),	
		    imgSrc4:require('../assets/news/news01001/news01001004.jpg'),	
		    imgSrc5:require('../assets/news/news01001/news01001005.jpg'),	
		    imgSrc6:require('../assets/news/news01001/news01001006.jpg'),	
		    imgSrc7:require('../assets/news/news01001/news01001007.jpg'),	
		    imgSrc8:require('../assets/news/news01001/news01001008.jpg'),	
		    imgSrc9:require('../assets/news/news01001/news01001009.jpg'),
		    imgSrc10:require('../assets/news/news01001/news01001010.jpg'),	
		    imgSrc11:require('../assets/news/news01001/news01001011.jpg'),	
		    imgSrc12:require('../assets/news/news01001/news01001012.jpg'),
	    	imgLastSrc:require('../assets/news/news01001/news01001014.jpg'),
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
	width: 1200px;
	line-height: 28px;
	font-size: 14px;
	text-indent: 2em;
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
.content-inner .news-img-1 {
	height: 708px;
	width: 640px;
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