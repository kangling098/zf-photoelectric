<template>
	<div id="commonFooter">
		<div class="common-footer-wrapper">
			<div class="common-footer-top content">
				<a href="javascript:;">
					走进兆丰
				</a>
				<a href="javascript:;">
					快速导航
				</a>
				<a href="javascript:;">
					兆丰产品
				</a>
			</div>
			<div class="white-border"></div>
			<div class="common-footer-bottom content clearfix">
				<ul class="common-footer-bottom-ul">
					<li><a href="/about/">公司简介</a></li>
					<li><a href="/about/">企业文化</a></li>
					<li><a href="/about/">组织结构</a></li>
					<li><a href="/about/">荣耀资质</a></li>
				</ul>
				<ul class="common-footer-bottom-ul">
					<li><a href="javascript:;">用户案例</a></li>
					<li><a href="/join/">人才招聘</a></li>
					<!--<li><a href="">在线留言</a></li>-->
					<li><a href="/service/">联系我们</a></li>
				</ul>
				<ul class="common-footer-bottom-ul">
					<li><a href="/product/list02002">LED高亮背发光观片灯</a></li>
					<li><a href="/product/list02001">LED超薄液晶观片灯</a></li>
					<li><a href="/product/list01001">LED整体反射无影灯</a></li>
					<li><a href="/product/list01002">LED满天星无影灯</a></li>
				</ul>
				<ul class="common-footer-bottom-ul special">
					<li><a href="/product/list03">LED视力表</a></li>
					<li><a href="javascript:;">LED净化灯</a></li>
					<li><a href="javascript:;">医用显示器</a></li>
					<li><a href="javascript:;">触电体验仪</a></li>
				</ul>
				<div class="we-chat-code-wrapper pull-left">
					<span>微信公众号</span>
					<div class="we-chat-code-pic"></div>
				</div>
				<div class="hot-num-wrapper pull-left">
					<p>服务热线</p>
					<p class="special">0731-85229777</p>
					<p>客服邮箱</p>
					<a href="mpt@mplent.com">mpt@mplent.com</a> 
				</div>
			</div>
			<div class="common-footer-wrapper-bottom">
				<div class="bottom_info">
					<b>联系人：</b>何先生&#160;&#160;
					<b>手机：</b>18627568050&#160;&#160;
					<b>电话：</b>0731-85229777     &#160;&#160;
					<b>传真：</b>0731- 82881477&#160;&#160;
					<b>邮件：</b>151621175@qq.com&#160;&#160;<br />
					<b>网址：</b><a  href="http://www.mplent.com/" target="_self">http://www.mplent.com/</a>&#160;&#160;
					<b>地址：</b>湖南省长沙雨花区环保中路188号国企中心2号厂房<br />
					<a  href="http://www.mplent.com/" target="_self"> 湖南兆丰光电科技有限公司</a>&#160;版权所有&#160;2013-2018&#160;&#160;
				</div>
	
			</div>
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
					active:true
				}, {
					name: "关于兆丰",
					url: "/abouts/",
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
		}
	}
</script>

<style>
	.common-footer-wrapper {
		height: 350px;
		background: #e2e1df;
	}
	.common-footer-top {
		height: 105px;
		padding-top: 76px;
		padding-left: 145px;
	}
	.common-footer-top a {
		display: inline-block;
		margin-right: 110px;
		color: #575757;
		font-size: 14px;
	}
	.white-border {
		height: 1px;
		width: 100%;
		background-color: #f2f2f1;
	}
	.common-footer-bottom {
		padding-left: 145px;
	}
	.common-footer-bottom-ul {
		float: left;
		padding-top: 10px;
		width: 170px;
	}
	.common-footer-bottom-ul.special {
		width: 200px;
	}
	.common-footer-bottom-ul li {
		height: 24px;
		line-height: 24px;
	}
	.common-footer-bottom-ul li a {
		display: inline-block;
		height: 12px;
		font-size: 12px;
		color: #585858;
	}
	/*微信公众号*/
	.we-chat-code-wrapper {
		margin-right: 20px;
		padding-top: 12px;
		width: 70px;
	}
	.we-chat-code-wrapper span {
		line-height: 12px;
		font-size: 12px;
	}
	.we-chat-code-pic {
		margin-top: 4px;
		width: 70px;
		height: 70px;
		background: url(../css/img/wechat_code.jpg) no-repeat center;
		background-size: 100%;
	}
	.hot-num-wrapper {
		padding-top: 12px;
		width: 90px;
		text-align: center;
		font-size: 12px;
	}
	.hot-num-wrapper p {
		line-height: 20px;
	}
	.hot-num-wrapper p.special {
		margin-bottom: 12px;
	}
	.hot-num-wrapper a {
		color: #575757;
	}
	.common-footer-wrapper-bottom {
		margin-top: 60px;
		text-align: center;
		font-size: 12px;
		line-height: 24px;
	}
</style>