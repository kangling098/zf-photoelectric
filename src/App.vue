<template>
  <div id="app">
  	<commonHeader></commonHeader>
		<router-view class="view"></router-view>
		<commonFooter></commonFooter>
		<div class="wrapper-connect-div">
		</div>
  </div>
</template>
<style type="text/css">
	  #app {
	  	position: relative;
	  }
	  .wrapper-connect-div {
	  	position: fixed;
	  	top: 50%;
	  	right: -15px;
	  	margin-top: 60px;
	  	padding-left: 10px;
	  	width: 179px;
	  	height: 117px;
	  	background: url(css/img/index/connect_detail_bg.jpg) no-repeat center;
	  }
	  ins#qiao-invite-wrap {
	  	left: 0!important;
	  	top: 500px!important;
	  	margin-left: 0!important;
	  }
</style>
<script>
import commonHeader from './component/commonHeader.vue';
import commonFooter from './component/commonFooter.vue';
export default {
  name: 'app',
  components: { commonHeader ,commonFooter}
}
</script>

