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
					<div v-if="aboutPageList.item1" class="about-page-content-01">
						<p>
							湖南兆丰光电科技有限公司是专业化高品质的LED照明产品制造商。公司主要研发生产高品级医用LED观片灯/无影灯/
							检查灯/LED模组/LED灯条等产品，完全符合国家YY/T 0610-2007《医学影像照片观察装置通用技术条件》及GB/T24823
							-2009《照明LED模块性能要求》行业标准，目前已通过CE、ROHS、CMA、ISO9001：2008等国际质量认
						</p>
						<p>
							 现位于湖南长沙雨花经济开发区的兆丰光电拥有高效的研发管理中心，拥有一支LED医用照明行业工作经验丰富的管理团队
							和技术团队，具有丰富的理论和实践经验。
						</p>
						<p>
							兆丰光电致力于发展成为具有国际竞争能力、国内领先的LED医用照明领域国际化民族品牌，同时从韩国、新加坡、日本、
							台湾等国家和地区引进了全自动封装和SMD生产设备，拥有从 LED器件封装到医用LED应用产品生产的较完整产业链，以保
							证应用产品在稳定性、ESD指标、衰减幅度、一致性、配光曲线等各方面均具有卓越的性能，打造了优良高端的品牌形象，
							赢得业内和客户广泛的认可和赞誉。
						</p>
						<p>
							兆丰光电愿为全球的医用LED照明行业奉献更卓越的产品与服务。
						</p>
					</div>
					<div v-if="aboutPageList.item2" class="about-page-content-01">
						<p>
							企业文化
						</p>
						<p>
							产品理念：追求卓越，缔造完美<br/>
							员工理念：乐业，敬业，专业<br/>
							营销理念：共赢，互利<br/>
							服务理念：我们的售后服务与售前服务一样好<br/>
							管理理念：成功来自创新，发展来自合作<br/>
							新共享主义：我们将与客户一道，资源共享，利益共享，喜悦共享，磨砺共享，同行致远。<br/>
						</p>
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
    			name:"公司简介"
    		},{
    			name:"企业文化"
    		},{
    			name:"组织结构"
    		},{
    			name:"资质荣耀"
    		}
    	],
    	aboutPageList:{
    		item1:true,
    		item2:false,
    		item3:false,
    		item4:false
    	}
    }
  },
//components: { commonHeader },
	created:function(){
		var vm=this;
		setInterval(function(){
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
		//控制显示哪一个关于兆丰模块
		aboutChoose(index){
			var vm = this;
			for(let i=0;i<4;i++){
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
	height: 744px;
	background:url(../css/img/about/about-banner.jpg)  no-repeat center #333;
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
	padding-left: 129px;
	height: 102px;
	width: 299px;
	font-size: 14px;
	color: #fff;
}
.about-choose-item:hover {
	color: #ef7d18;
	cursor: pointer;
}
.border-right {
	border-right: 1px solid #fff;
	height: 86px;
}
.item3 .border-right {
	border: none;
}
.about-choose-item.item0 {
	background: url(../css/img/about/about-item01.png) no-repeat 160px 20px #333;
	background-size: 54px 54px;
	padding-left: 160px;
}
.about-choose-item.item1 {
	background: url(../css/img/about/about-item02.png) no-repeat 130px 20px #333;
	background-size: 54px 54px;
}
.about-choose-item.item2 {
	background: url(../css/img/about/about-item03.png) no-repeat 130px 20px #333;
	background-size: 54px 54px;
}
.about-choose-item.item3 {
	border: none;
	background: url(../css/img/about/about-item04.png) no-repeat 74px 20px #333;
	padding-left: 74px;
	background-size: 54px 54px;
}

/*详情页面*/
.about-page-content {
	background-color: #fff;
}
.about-page-content-01 {
	padding: 40px 170px 70px;
}
.about-page-content-02 {
	padding: 40px 0 70px;
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