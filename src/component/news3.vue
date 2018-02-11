<template>
	<div id="news">
		<div class="news-wrapper">
			<div class="news-content">
				<div class="content-inner">
					<p class="article-title">参观学习，砥砺前行</p>
					
					<p class="article-p">
						长沙世邦工业园坐落在长沙河西，公司规模飞速发展，产品创新延伸到各个领域，管理机制相对完善，是全国通信技术行业的佼佼者。我们湖南兆丰光电是生产手术无影灯，LED观片灯等医用照明产品的厂家，产品类别不相同，但是作为企业管理和发展的方面来看，取长补短，多方面学习固然是值得提倡和鼓励的。
					</p>
					<p class="article-p">
						有机会去参观和学习，大家都相当兴奋。兆丰光电参观团一行十二人，在吴向阳总经理的带领下，早早地集合并浩浩荡荡往长沙世邦通信技术科技有限公司开去。
					</p>
					<p class="article">
						世邦的总经理余总亲自接待了我们，备感殊荣。
					</p>
					<img class="news-img-1" :src="imgSrc1"/>
					<img class="news-img-1" :src="imgSrc2"/>
					<p class="article">
						参观流程，从一楼的展厅开始咯~
					</p>
					<p class="article">
						展厅的一角，是不是一看就有种环境素净整洁，产品高端大气，格局奢华有内涵的感觉？是的，毋庸置疑你的感觉绝对真实可靠，事实就是如此！
					</p>
					<img class="news-img-1" :src="imgSrc2"/>
					<img class="news-img-1" :src="imgSrc3"/>
					<p class="article">
						这位是世邦文化企划部门负责人李小姐，也是我今天拜的一位师傅，她在为我们大家解说世邦的整体介绍。
						<br />
						余总亲自详细给我们介绍这些应用于各种行业领域的世邦通信技术产品的相关情况，使我们大开眼界了。
					</p>
					<img class="news-img-1" :src="imgSrc4"/>
					<img class="news-img-1" :src="imgSrc5"/>
					<p class="article">
						参观完展厅，对于世邦的产品和应该技术情况有了一个基础的了解。接下来就上楼依次去参观公司几个重要的部门，比如研发部，企划部，生产车间，仓储物流部门等。许多先进的管理理念和卓越的成就，确实值得我们深入学习和研究。
					</p>
					<p class="article">
						地面光洁如镜，物品整齐有序，员工有条不紊，不禁艳羡钦佩，但同时也明白，达到这种境界并非一日之功，是公司和员工长期共同努力的成果。
					</p>
					
					<img class="news-img-1" :src="imgSrc6"/>
					<img class="news-img-1" :src="imgSrc7"/>
					<br />
					<p class="article">
						翌日早上，公司各部门例会上，大家分别谈心得，分享收获，针对我公司生产的医用LED无影灯、观片灯及视力表灯箱产品的具体情况，把学习他人经验的东西融汇贯通，这样才能真正地学以致用。
					</p>
					<p class="article">
						 学习进取是湖南兆丰和兆丰人坚信的理念！让我们迎头赶上，让我们你追我赶，让我们一起努力拼博，共同进步！
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
		    imgSrc1:require('../assets/news/news3/news3000001.png'),	
		    imgSrc2:require('../assets/news/news3/news3000002.png'),	
		    imgSrc3:require('../assets/news/news3/news3000003.png'),	
		    imgSrc4:require('../assets/news/news3/news3000004.png'),	
		    imgSrc5:require('../assets/news/news3/news3000005.png'),	
		    imgSrc6:require('../assets/news/news3/news3000006.png'),	
		    imgSrc7:require('../assets/news/news3/news3000007.png'),	
		    imgSrc8:require('../assets/news/news3/news3000008.png'),	
		    imgSrc9:require('../assets/news/news2/news1000009.png'),	
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