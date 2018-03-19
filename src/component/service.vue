<template>
	<div id="service">
		<div class="service-wrapper">
			<div class="service-banner">
			</div>
			<div class="service-list-wrapper auto">
				<div class="service-list-inner content clearfix">
				<template v-for="(item,index) in aboutList">
					<div @click=aboutChoose(index+1) class="service-choose-item pull-left" :class="'item' + index">
						<div class="border-right">
							
						</div>
						{{item.name}}
					</div>
				</template>
				</div>
			</div>
			<div class="service-page-content auto">
				<div class="service-page-content content">
					<div v-if="aboutPageList.item1" class="service-page-content-01 first-type">
						<p>
							湖南兆丰光电科技有限公司
						</p>
						<p class="p-type-2">
							地址：中国.湖南长沙市雨花区环保中路188号国企中心2号厂房
						</p>
						<p>
							电话：0731-85229796  0731-85229777  +86-731-85229795  
						</p>
						<p>
							QQ：3002959091
						</p>
						<p>
							网址：http://www.mplent.com 
						</p>
						<p>
							邮箱：mpt@mplent.com
						</p>
						<!--<p class="p-type-3">
							东北地区（辽宁/吉林/黑龙江）：<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; +86-1731-85229795     18874962016 刘婷<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  QQ:3002916307           Emall:alice@mplent.com
						</p>
						<p class="p-type-3">
							华北地区（河北/山西/内蒙古？/北京/天津/四川/贵州/云南/西藏）：<br/>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+86-0731-8522977      18874030828  邓雪花<br/>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;QQ：3002959091         Emall:fgl@mplent.com
						</p>
						<p class="p-type-3">
							华东地区（江苏/浙江/安徽/福建/江西/山东）：<br/>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+86-0731-85229796     13874892211  欧阳伟伟<br/>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;QQ：3002965025          Emall:fgl@mplent.com
						</p>
						<p class="p-type-3">
							其他地区（河南/湖北/湖南/广东/广西/海南/陕西/甘肃/青海/宁夏/新疆）：<br/>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+86-0731-85229795     13974942022  何建平<br/>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;QQ：3002937239          Emall:bjp@mplent.com
						</p>-->
					</div>
					<div v-if="aboutPageList.item2" class="service-page-content-02 service-product-wrapper clearfix">
						
						<a class="service-product-a" v-for="item in productList" :href="item.url">
							<img :src="item.imgSrc"/>
						</a>
					</div>
					<div v-if="aboutPageList.item3" class="service-page-content-03">
						<a v-for="item in technicalFileList" :href="item.url">{{item.name}}</a>
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
    	aboutList:[
    		{
    			name:"联系我们"
    		},{
    			name:"服务产品"
    		},{
    			name:"技术文档"
    		}
    	],
    	aboutPageList:{
    		item1:true,
    		item2:false,
    		item3:false
    	},
    	productList:[
	    	{
	    		imgSrc:require('../assets/service/service-product-bg1.jpg'),
	    		url:"/product/list01"
	    	},{        
	    		imgSrc:require('../assets/service/service-product-bg2.jpg'),
	    		url:"/product/list02"
	    	},{        
	    		imgSrc:require('../assets/service/service-product-bg3.jpg'),
	    		url:"/product/list03"
	    	},{        
	    		imgSrc:require('../assets/service/service-product-bg4.jpg'),
	    		url:"/product/list04001001"
	    	},{         
	    		imgSrc:require('../assets/service/service-product-bg5.jpg'),
	    		url:"/product/list04002001"
	    	}
    	],
    	technicalFileList:[
    		{url:"javascript:;",name:"兆丰光电电子产业资料"},
    		{url:"javascript:;",name:"LED观片灯使用说明书"},
    		{url:"javascript:;",name:"LED视力表使用说明书"},
    		{url:"javascript:;",name:"LED无影灯使用说明书"},
    		{url:"javascript:;",name:"视力表厂家的视力表灯箱"},
    	]
    }
  },
//components: { commonHeader },
	created:function(){
	},
	methods:{
		//控制显示哪一个关于兆丰模块
		aboutChoose(index){
			var vm = this;
			for(let i=0;i<3;i++){
				vm.aboutPageList['item'+(i+1)]=false;
			}
			vm.aboutPageList['item'+index]=true;
		}
	}
  
}
</script>

<style>
#service {
	padding-top: 82px;
	min-width: 1200px;
	margin: 0 auto;
}
.service-banner {
	height: 680px;
	background:url(../css/img/service/service-banner-bg.jpg) no-repeat center ;
}
.service-list-wrapper {
	margin-bottom: 78px;
	height: 148px;
	background-color: #333333;
}
.service-list-inner {
	height: 148px;
}
.service-choose-item {
	height: 102px;
	width: 399px;
	font-size: 14px;
	color: #fff;
	text-align: center;
}
.service-choose-item:hover {
	color: #ef7d18;
	cursor: pointer;
}
.border-right {
	border-right: 1px solid #fff;
	height: 86px;
}
.service-wrapper .item2 .border-right {
	border: none;
}
.service-choose-item.item0 {
	background: url(../css/img/service/service-item01.png) no-repeat center #333;
	background-size: 54px 54px;
}
.service-choose-item.item1 {
	background: url(../css/img/service/service-item02.png) no-repeat center #333;
	background-size: 54px 54px;
} 
.service-choose-item.item2 {
	background: url(../css/img/service/service-item03.png) no-repeat center #333;
	background-size: 54px 54px;
}

/*详情页面*/
.service-page-content {
	background-color: #fff;
}
.service-page-content-01 {
	padding: 40px 170px 70px;
}
.service-page-content-01.first-type{
	padding: 40px 0 70px 450px ;
}

.service-page-content-01 p {
	margin-bottom: 14px;
	line-height: 24px;
	font-size: 14px;
	color: #333;
}

/*模块2 产品列表*/
.service-page-content-02 {
	padding: 40px 170px 70px;
}
.service-page-content-02.service-product-wrapper  {
	padding-right: 0;
}
.service-product-a {
	float: left;
	margin-right: 60px;
	margin-bottom: 40px;
	width: 280px;
	height: 134px;
	
}
.service-product-a img{
	width: 100%;
	height: 100%;
}
/*技术文档*/
.service-page-content-03 {
	padding: 40px 170px 70px;
}
.service-page-content-03 a {
	display: block;
	line-height: 40px;
	font-size: 18px;
	color: #333;
}
</style>