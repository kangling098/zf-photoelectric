<template>
  <div id="app">
  	<commonHeader></commonHeader>
		<router-view class="view"></router-view>
  </div>
</template>

<script>
import commonHeader from './component/commonHeader.vue'
export default {
  name: 'app',
  components: { commonHeader }
}
</script>

<style>
#app {
	min-width: 1200px;
	margin: 0 auto;
}
.banner {
	width: 100%;
	height: 484px;
	background:url(/src/css/img/banner-bg-1.jpg)  no-repeat center #eee5dc;
}
.banner-1 {
	background:url(/src/css/img/banner-bg-1.jpg)  no-repeat center #eee5dc;
}
.banner-2 {
	background:url(/src/css/img/banner-bg-2.jpg)  no-repeat center #fff;
}
.banner-3 {
	background:url(/src/css/img/banner-bg-3.jpg)  no-repeat center #fff;
}
.banner-4 {
	background:url(/src/css/img/banner-bg-4.jpg)  no-repeat center #fff;
}
.banner-5 {
	background:url(/src/css/img/banner-bg-5.jpg)  no-repeat center #eee5dc;
}
.banner-center {
	position: relative;
	margin: 0 auto;
	width: 1200px;
	height: 100%;
}
.banner-nav {
	position: absolute;
	right: 100px;
	bottom: 30px;

}
.banner-item {
	float: left;
	

}
.banner-bottom {
	height: 80px;
	background-color: #323232;
}
.banner-more-link {
	float: right;	
	margin: 0 auto;
	width: 1200px;
	height: 80px;
	text-align: right;
	font-size: 24px;
	line-height: 80px;
	color: #fff;
}
.news-content {
	padding: 20px 30px;
}
.news-item-content {
	float: left;
	height: 220px;
	background-color: #fff;
}
.news-item-content.news-item-1 {
	margin-right: 12px;
	width: 372px;
}
.news-item-content.news-item-2 {
	margin-right: 12px;
	width: 446px;
}
.news-item-content.news-item-3 {
	width: 290px;
}
.news-item-title {
	padding-left: 30px;
	height: 36px;
	line-height: 44px;
	font-size: 16px;
	background-color: #ef7d18;
	color: #fff;
}
.news-item-title-english {
	font-size: 12px;
	font-style:oblique;
}
.product-bg {
	text-align: right;
	margin-top: 40px;
	width: 100%;
	height: 146px;
	background: url(/src/css/img/product-bg-01.jpg)  no-repeat 170px 0;
}
.product-title,.product-sub-title {
	width: 170px;
}
.product-title {
	padding-top: 14px;
	line-height: 24px;
	font-size: 20px;
}
.product-sub-title {
	font-size: 14px;
}
</style>
