<template>
	<div id="news">
		<div class="news-wrapper">
			<div class="news-content">
				<div class="content-inner">
					<p class="article-title">印度尼西亚客户来访</p>
					
					<p class="article-p">
						来自印度尼西亚的Mr. Martin，此次从他本国出发来中国考察医疗器械行业的几家公司，寻求长期合作发展的供应商。2018年元月29日Mr. Martin莅临我们湖南兆丰光电科技有限公司参观考察，洽谈合作事宜。
					</p>
					<p class="article-p">
						公司非常注重Mr. Martin的到访，安排人员和车辆到机场接机，高层管理罗赛先生接待，并逐一向Mr. Martin介绍我司相关产品——LED手术无影灯以及LED观片灯的生产流程；总经理吴向阳先生也特意从别处赶回公司与Mr. Martin会面。
					</p>
					<img class="news-img-0" :src="imgSrc1"/>
					<p class="article">
						Mr. Martin首先参观了展厅，刘婷以流利的英语与之对话，带他看了公司的相关证件；接着向Mr. Martin介绍无影灯产品的结构，并告之我们无影灯产品从线路板设计开始都是公司自己研发，制作工序从线路板贴片开始都是公司自己生产制作，一直到最后的包装工序的一整套工序流程。
					</p>
					<p class="article">
						Mr. Martin了解得非常详细，一边听介绍，一边提出相关问题，罗赛先生现场一一为之解惑。
					</p>
					<img class="news-img-1" :src="imgSrc2"/>
					<img class="news-img-1" :src="imgSrc3"/>
					<p class="article">
						展厅出来之后，大家从工序的源头开始了解整个生产制作过程。
					</p>
					<img class="news-img-1" :src="imgSrc4"/>
					<img class="news-img-1" :src="imgSrc5"/>
					<p class="article">
						 来到原材料仓库，我们向Mr. Martin介绍了无影灯制作过程中光源里非常重要的一部分——透镜。这是我们设计开模委托其它厂家生产的，比市面上普通透镜相比，光源更匀称，光效更集中，功耗更低，使整灯的使用寿命更长。
					</p>
					<img class="news-img-1" :src="imgSrc6"/>
					<img class="news-img-1" :src="imgSrc7"/>
					<br />
					<p class="article">
						 SMT贴片车间，如何将灯珠或者元器件与线路板相结合的问题，就一目了然地展示出来了。
					</p>
					<p class="article">
						  LED灯珠封装车间。我们观片灯产品所用的LED灯珠就是在这里制作出来的。对于观片灯产品来说，无论是从LED光源部分，或者是电路控制部分，还是组装结构部分，我们都有着相当的自信。因为，湖南兆丰光电拥有多年的LED光源生产制作经验；电路控制部分也曾获得软件著作权、产品专利证书；结构用材全部都有考究，不管是铝件的开模成型，还是导光的厚薄程度，以及导光的透光率，甚至到铝底板的厚度都有着严格的标准。
					</p>
					<img class="news-img-1" :src="imgSrc8"/>
					<img class="news-img-1" :src="imgSrc9"/>
					<p class="article">
						  之后到生产车间参观的时候，吴总经理还亲自向Mr. Martin展示了无影灯光源的组装。Mr. Martin频频点头，拍照记录，非常认可我们这种无影灯光源方案。不仅完美地解决了光源块与块之间的缝隙，而且更解决了之前线路繁杂的问题，使整灯的组装工程化繁为简了。
					</p>
					<img class="news-img-1" :src="imgSrc10"/>
					<img class="news-img-1" :src="imgSrc11"/>
					<p class="article">
						  Mr. Martin了解过后，对我们的工艺和产品都很满意，表现出浓厚的兴趣和合作意向。吴总和Mr. Martin还就日后合作方案中的相关细节问题进行了进一步的协商和讨论。临走的时候，Mr. Martin表示期待2018年与我们湖南兆丰光电科技有限公司的合作尽快到来，早日实现互利双赢！
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
		    imgSrc1:require('../assets/news/news2/news1000001.png'),	
		    imgSrc2:require('../assets/news/news2/news1000002.png'),	
		    imgSrc3:require('../assets/news/news2/news1000003.png'),	
		    imgSrc4:require('../assets/news/news2/news1000004.png'),	
		    imgSrc5:require('../assets/news/news2/news1000005.png'),	
		    imgSrc6:require('../assets/news/news2/news1000006.png'),	
		    imgSrc7:require('../assets/news/news2/news1000007.png'),	
		    imgSrc8:require('../assets/news/news2/news1000008.png'),	
		    imgSrc9:require('../assets/news/news2/news1000009.png'),
		    imgSrc10:require('../assets/news/news2/news1000010.png'),	
		    imgSrc11:require('../assets/news/news2/news1000011.png'),	
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