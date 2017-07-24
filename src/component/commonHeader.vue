<template>
	<div id="commonHeader">
		<div class="nav-header-wrapper">
			<div class="nav-header">

				<a href="/" class="logo-bg">

				</a>
				<ul class="nav-center">
					<template v-for="(item,index) in navlist">
						<li class="nav-item-wrapper"  @click="activeHeader(item)">
							<router-link class="nav-item" v-bind:class='{"active":item.active}' :to="item.url">{{item.name}}</router-link>
						</li>
					</template>
				</ul>
				<div class="nav-right">
					<a class="change-language-a chinese-change active" href="javascript:;">中文</a>&nbsp;|&nbsp;
					<a class="change-language-a english-change" href="javascript:;">English</a>
				</div>
			</div>
			<div class="common-header-menu">
				
			</div>
		</div>
		<div class="common-menu">
			
		</div>
	</div>
	
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				author: "微信公众号 jinkey-love",
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
				}]
			}
		},
		methods:{
			activeHeader(item){
//				console.log(10)
				var vm = this;
				vm.navlist.forEach(function(value, index, array){
					value.active=false;
				})
				item.active=true;
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
</style>