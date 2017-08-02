<template>
	<div id="commonHeader">
		<div class="nav-header-wrapper">
			<div class="nav-header">

				<a href="/" class="logo-bg">

				</a>
				<ul class="nav-center">
					<template v-for="(item,index) in navlist">
						<li class="nav-item-wrapper"  @click="activeHeader(item)" @mouseenter="headerMenuSpread(index)">
							<router-link class="nav-item" v-bind:class='{"active":item.active}' :to="item.url">{{item.name}}</router-link>
						</li>
					</template>
				</ul>
				<div class="nav-right">
					<a class="change-language-a chinese-change active" href="javascript:;">中文</a>&nbsp;|&nbsp;
					<a class="change-language-a english-change" href="javascript:;">English</a>
				</div>
			</div>
			<!--二级菜单-->
			<div v-show="commonHeaderIsShow" @mouseleave="commonHeaderHide" class="common-header-menu">
				<div class="common-header-product-list">
					<div v-for="(item,index) in headerProductList" class="common-header-product-item">
						<p class="common-product-list-title" :class="'title-' + (index+1)">
							<a :href="item.url">{{item.name}}</a>
						</p>
						<a v-for="child in item.productList" class="common-product-list-item" :href="child.url">{{child.name}}</a>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				commonHeaderIsShow:true,
				navlist: [{
					name: "首页",
					url: "/",
					active:false
				}, {
					name: "关于兆丰",
					url: "/about/",
					active:false
				}, {
					name: "产品展示",
					url: "/production/",
					active:false
				}, {
					name: "用户服务",
					url: "/service/",
					active:false
				}, {
					name: "人才招聘",
					url: "/join/",
					active:false
				}],
				headerProductList:[
					{
						name:"LED无影灯",
						url:"/product/list#01",
						productList:[
							{name:"整体反射式无影灯",url:"/product/list#01001"},
							{name:"满天星LED无影灯",url:"/product/list#01002"},
							{name:"移动式LED无影灯",url:"/product/list#01003"},
							{name:"LED无影灯发光引擎",url:"/product/list#01004"}
						]
					},
					{
						name:"LED观光灯",
						url:"javascript:;",
						productList:[
							{name:"超薄液晶侧发光LED观片灯",url:"javascript:;"},
							{name:"超高亮背发光LED观片灯",url:"javascript:;"},
							{name:"嵌入式LED观片灯",url:"javascript:;"}
						]
					},
					{
						name:"LED视力表",
						url:"javascript:;",
						productList:[
							{name:"多功能LED视力表",url:"javascript:;"},
							{name:"5米E字LED视力表",url:"javascript:;"},
							{name:"5米C字LED视力表",url:"javascript:;"},
							{name:"2.5米儿童LED视力表",url:"javascript:;"},
							{name:"超薄款2.5米E字视力表",url:"javascript:;"}
							
						]
					},
					{
						name:"更多产品",
						url:"javascript:;",
						productList:[
							{name:"LED净化灯",url:"javascript:;"},
							{name:"医用显示器",url:"javascript:;"},
							{name:"模拟触电体验仪",url:"javascript:;"}
						]
					}
				]
			}
		},
		methods:{
			//控制公共头部点击变亮
			activeHeader(item){
				var vm = this;
				vm.navlist.forEach(function(value, index, array){
					value.active=false;
				})
				item.active=true;
				document.body.scrollTop = document.documentElement.scrollTop = 0;
			},
			//控制产品列表菜单显现
			headerMenuSpread(index){
				var vm = this;
				if(index==2){
					vm.commonHeaderIsShow=true;
				}else {
					vm.commonHeaderIsShow=false;
				}
			},
			//鼠标离开产品菜单,隐藏菜单
			commonHeaderHide(){
				var vm = this;
				vm.commonHeaderIsShow=false;
			}
		},
		created:function(){
			var vm=this;
			
		}
		
	}
</script>

<style>

	@import "../css/common.css";
	.nav-header-wrapper {
		position: fixed;
		z-index: 9;
		width: 100%;
		background: url(../css/img/common-header-bg.jpg) repeat-x;

	}
	.nav-header {
		position: relative;
		margin: 0 auto;
		width: 100%;
		width: 1200px;
		height: 82px;
	}
	.logo-bg {
		position: absolute;
		left: 120px;
		top: 24px;
		display: block;
		width: 133px;
		height: 44px;

		background: url(../css/img/logo.png) no-repeat center;

	}
	
	.nav-center {
		margin: 0 auto;
		padding-left: 40px;
		width: 680px;
		height: 100%;
	}
	
	.nav-item-wrapper {
		float: left;
		height: 100%;
		line-height: 82px;
		text-align: center;
	}
	
	.nav-item {
		display: inline-block;
		margin: 0 20px;
		padding: 0 12px;
		height: 68px;
		border-bottom: 3px solid transparent;
		color: #333;
		font-size: 16px;
	}
	
	.nav-item:hover,
	.nav-item.active {
		color: #ee7c17;
		border-bottom-color: #ee7c17;
	}
	
	.nav-right {
		position: absolute;
		right: 70px;
		top: 40px;
		width: 140px;
		height: 24px;
		line-height: 24px;
	}
	
	.change-language-a {
		font-size: 12px;
		color: #474444;
	}
	
	.change-language-a.active {
		color: #ee7c17;
	}
/*二级菜单*/
.common-header-menu {
	position: absolute;
	top: 82px;
	width: 100%;
	height: 290px;
	background: #323232;
}
.common-header-product-list {
	margin: 0 auto;
	width: 1000px;
}
.common-header-product-item {
	float: left;
	position: relative;
	width: 25%;
	height: 160pxpx;
	padding-top: 28px;
	padding-left: 28px;
}
.common-header-product-item:before {
	content: " ";
	display: block;
	position: absolute;
	width: 1px;
	height: 150px;
	left: 3px;
	background-color: #fff;
}
.common-header-product-item:first-child:before {
	display: none;
}
.common-product-list-title {
	padding-left: 58px;
	height: 46px;
	background: url(../css/img/header/header-p-01.png) no-repeat top left;
	background-size: 36px 36px;
}
.common-product-list-title >a {
	color: #fff;
	line-height: 24px;
	font-size: 20px;
}
.common-product-list-title:hover >a {
	color: #ef7d18;
}
.common-product-list-title:hover {
	background: url(../css/img/header/header-p-active-01.png) no-repeat top left;
	background-size: 36px 36px;
}
.common-product-list-title.title-2 {
	background: url(../css/img/header/header-p-02.png) no-repeat top left;
	background-size: 36px 36px;
}
.common-product-list-title.title-2:hover {
	background: url(../css/img/header/header-p-active-02.png) no-repeat top left;
	background-size: 36px 36px;
}
.common-product-list-title.title-3 {
	background: url(../css/img/header/header-p-03.png) no-repeat top left;
	background-size: 36px 36px;
}
.common-product-list-title.title-3:hover {
	background: url(../css/img/header/header-p-active-03.png) no-repeat top left;
	background-size: 36px 36px;
}
.common-product-list-title.title-4 {
	background: url(../css/img/header/header-p-04.png) no-repeat top left;
	background-size: 36px 36px;
}
.common-product-list-title.title-4:hover {
	background: url(../css/img/header/header-p-active-04.png) no-repeat top left;
	background-size: 36px 36px;
}
.common-product-list-item {
	display: block;
	padding-left: 60px;
	line-height: 28px;
	font-size: 12px;
	color: #fff;
}
.common-product-list-item:hover {
	color: #ef7d18;
}

</style>