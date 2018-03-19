<template>
	<div id="news">
		<div class="news-wrapper">
			<div class="news-content">
				<div class="content-inner">
					<p class="article-title">招聘简章</p>
					
					<p class="article-p">
						湖南兆丰光电科技有限公司位于长沙市雨花区环保中路188号国际企业中心2栋，公司成立于2009年。是专业化高品质的医用LED照明产品制造商。公司主要研发和生产高品级手术室无影灯、LED观片灯、LED视力表等医用LED系列产品。 公司目前发展形势喜人，诚招有志之士加入！
						
					</p>
					<div class="clearfix">
						<p class="article">
							<br />外贸业务员  2人
							<br />待遇：4K-10K
							<br />大专及以上学历，国际贸易、商务英语类相关专业；
							<br />具有较高的英语水平，较好的计算机操作水平。
						</p>
						<p class="article">
							<br />业务员   2人
							<br />待遇：3K-10K
							<br />大专及以上学历，市场营销相关专业；
						</p>
						<p class="article">
							<br />嵌入式软件工程师 2名
							<br />待遇：5K-10K
							<br />计算机或相关专业本科学历以上；
							<br />精通嵌入式linux应用开发，熟悉视频/图像信号处理算法，有IPC和NVR开发经验；2年以上软件开发经验；
						</p>
						<p class="article">
							<br />维修工程师  3名
							<br />待遇：3K-5K
							<br />电子信息、机电一体化专业专科及以上学历；
						</p>
						<p class="article">
							<br />SMT操作员   2人
							<br />待遇：3K-5K
							<br />有电子厂和SMT机器操作经验者优先。
						</p>
						<p class="article">
							<br />品质检验员 2人
							<br />待遇：3K-5K
							<br />熟悉质量管理体系，熟悉电子检测类仪器，电子行业从业经验者优先。
						</p>
						<p class="article">
							<br />行政文员  1人
							<br />待遇：3K-5K
							<br />文秘、行政管理等相关专业中专以上学历；文字功底较好，有一定的活动组织能力；
						</p>
						<p class="article">
							<br />网络推广专员  1人
							<br />待遇：3K-5K
							<br />电子商务类和市场营销类相关专业，有美工基础者优先；
						</p>
						<p class="article">
							<br />电子厂普工    20人
							<br />待遇：3K-5K
							<br />学历不限，男女不限，有电子厂工作经验者优先。
						</p>
					</div>
					<p class="article-p">
						工作时间8小时制，单休；包工作餐，提供集体宿舍；五险、年底双薪、带薪年假、节日福利、生日贺礼......
					</p>
					<p style="text-align: right;" class="article-p">
						<br />
						<br />
						<br />
						<br />
						湖南兆丰光电科技有限公司
						<br />
						2018年2月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
.content-inner .article {
	float: left;
	padding-left: 80px;
	height: 200px;
	width: 49%;
}
</style>