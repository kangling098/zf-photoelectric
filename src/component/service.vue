<template>
	<div id="about">
		<div class="about-wrapper">
			<div class="about-banner">
			</div>
			<div class="about-list-wrapper auto">
				<div class="about-list-inner content clearfix">
				<template v-for="(item,index) in aboutList">
					<div @click=aboutChoose(index+1) class="about-choose-item pull-left" :class="'item' + index">
						<div class="border-right">
							
						</div>
						{{item.name}}
					</div>
				</template>
				</div>
			</div>
			<div class="about-page-content auto">
				<div class="about-page-content content">
					<div v-if="aboutPageList.item1" class="about-page-content-01 first-type">
						<p>
							湖南兆丰光电科技有限公司
						</p>
						<p class="p-type-2">
							地址：中国.湖南长沙市雨花区环保中路188号国企中心2号厂房A104
						</p>
						<p>
							电话：+86-731-85229795  85229796  85229777
						</p>
						<p>
							传真:+86-731-82881477
						</p>
						<p>
							网址：http://www.mplent.com     http://www.mplent@mplent.com
						</p>
						<p class="p-type-3">
							东北地区（辽宁/吉林/黑龙江）：</br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; +86-1731-85229795     18874962016 刘婷</br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  QQ:3002916307           Emall:alice@mplent.com
						</p>
						<p class="p-type-3">
							华北地区（河北/山西/内蒙古？/北京/天津/四川/贵州/云南/西藏）：</br>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+86-0731-8522977      18874030828  邓雪花</br>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;QQ：3002959091         Emall:fgl@mplent.com
						</p>
						<p class="p-type-3">
							华东地区（江苏/浙江/安徽/福建/江西/山东）：</br>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+86-0731-85229796     13874892211  欧阳伟伟</br>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;QQ：3002965025          Emall:fgl@mplent.com
						</p>
						<p class="p-type-3">
							其他地区（河南/湖北/湖南/广东/广西/海南/陕西/甘肃/青海/宁夏/新疆）：</br>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+86-0731-85229795     13974942022  何建平</br>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;QQ：3002937239          Emall:bjp@mplent.com
						</p>
					</div>
					<div v-if="aboutPageList.item2" class="about-page-content-01">
						
						<a class="service-product-a" v-for="item in item2List" :href="item.url">
							<img :src="item.imgSrc"/>
						</a>
					</div>
					<div v-if="aboutPageList.item3" class="about-page-content-02">
						<div class="about-organization-bg"></div>
					</div>
					<div v-if="aboutPageList.item4" class="about-page-content-02">
						<div class="about-hornor-bg"></div>
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
    			name:"企业文化"
    		},{
    			name:"技术文档"
    		}
    	],
    	aboutPageList:{
    		item1:true,
    		item2:false,
    		item3:false
    	},
    	item2List:[
	    	{
	    		imgSrc:"./../css/img/service/service-product-bg1.png"
	    	},{         
	    		imgSrc:"./../css/img/service/service-product-bg2.png"
	    	},{         
	    		imgSrc:"./../css/img/service/service-product-bg3.png"
	    	},{         
	    		imgSrc:"./../css/img/service/service-product-bg4.png"
	    	},{         
	    		imgSrc:"./../css/img/service/service-product-bg5.png"
	    	}
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
#about {
	padding-top: 82px;
	min-width: 1200px;
	margin: 0 auto;
}
.about-banner {
	height: 680px;
	background:url(../css/img/service/service-banner-bg.jpg) no-repeat center ;
}
.about-list-wrapper {
	margin-bottom: 78px;
	height: 148px;
	background-color: #333333;
}
.about-list-inner {
	height: 148px;
}
.about-choose-item {
	height: 102px;
	width: 399px;
	font-size: 14px;
	color: #fff;
	text-align: center;
}
.about-choose-item:hover {
	color: #ef7d18;
	cursor: pointer;
}
.border-right {
	border-right: 1px solid #fff;
	height: 86px;
}
.item2 .border-right {
	border: none;
}
.about-choose-item.item0 {
	background: url(../css/img/about/about-item01.png) no-repeat center #333;
}
.about-choose-item.item1 {
	background: url(../css/img/about/about-item02.png) no-repeat center #333;
} 
.about-choose-item.item2 {
	background: url(../css/img/about/about-item03.png) no-repeat center #333;
}

/*详情页面*/
.about-page-content {
	background-color: #fff;
}
.about-page-content-01 {
	padding: 40px 170px 70px;
}
.about-page-content-01.first-type{
	padding: 40px 0 70px 450px ;
}
.about-page-content-02 {
	padding: 40px 0 70px;
}
.service-product-a {
	float: left;
	width: 280px;
	height: 134px;
	
}
.service-product-a {
	width: 100%;
	height: 100%;
}
.about-page-content-01 p {
	margin-bottom: 14px;
	line-height: 24px;
	font-size: 14px;
	color: #333;
}
.about-organization-bg {
	margin: 0 auto;
	width: 857px;
	height: 457px;
	background: url(../css/img/about/organization-bg.jpg) no-repeat center;
}
.about-hornor-bg {
	margin: 0 auto;
	width: 1064px;
	height: 522px;
	background: url(../css/img/about/hornor-bg.jpg) no-repeat center;
}
</style>