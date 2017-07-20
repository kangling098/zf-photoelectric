<template>
	<div id="commonHeader">
		<div class="nav-header-wrapper">
			<div class="nav-header">

				<a href="/" class="logo-bg">

				</a>
				<ul class="nav-center">
					<template v-for="(item,index) in navlist">
						<li class="nav-item-wrapper">
							<a class="nav-item" v-bind:class='{"active":index==0}' :href="item.url">{{item.name}}</a>
						</li>
					</template>
				</ul>
				<div class="nav-right">
					<a class="change-language-a chinese-change active" href="javascript:;">中文</a>&nbsp;|&nbsp;
					<a class="change-language-a english-change" href="javascript:;">English</a>
				</div>
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
					url: "/"
				}, {
					name: "关于兆丰",
					url: "/about/"
				}, {
					name: "产品展示",
					url: "/production/"
				}, {
					name: "用户服务",
					url: "/service/"
				}, {
					name: "人才招聘",
					url: "/join/"
				}]
			}
		}
	}
</script>

<style>

	@import "../css/common.css";
	.nav-header-wrapper {
		width: 100%;
		background: url(../css/img/common-header-bg.jpg) repeat-x;

	}
	.nav-header {
		position: relative;
		margin: 0 auto;
		width: 100%;
		width: 1200px;
		height: 99px;
	}
	.logo-bg {
		position: absolute;
		left: 29px;
		top: 33px;
		display: block;
		width: 133px;
		height: 44px;

		background: url(../css/img/logo.png) no-repeat center;

	}
	
	.nav-center {
		margin: 0 auto;
		width: 800px;
		height: 100%;
	}
	
	.nav-item-wrapper {
		float: left;
		height: 100%;
		line-height: 110px;
		text-align: center;
	}
	
	.nav-item {
		display: inline-block;
		margin: 0 20px;
		padding: 0 20px;
		height: 74px;
		border-bottom: 3px solid transparent;
		color: #333;
		font-size: 22px;
	}
	
	.nav-item:hover,
	.nav-item.active {
		color: #ee7c17;
		border-bottom-color: #ee7c17;
	}
	
	.nav-right {
		position: absolute;
		right: 0;
		top: 50px;
		width: 120px;
		height: 24px;
		line-height: 24px;
	}
	
	.change-language-a {
		font-size: 18px;
		color: #474444;
	}
	
	.change-language-a.active {
		color: #ee7c17;
	}
</style>