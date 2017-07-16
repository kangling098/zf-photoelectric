<template>
  <div id="app">
  	<commonHeader></commonHeader>
    <div class="banner">
    	<div class="banner-bg">
    		<ul class="banner-nav">
	    		<template v-for="(item,index) in banner.list">
	    			<li class="banner-item item-1">{{index}}</li>
    			</template>
    		</ul>
    	</div>
    </div>
  </div>
</template>

<script>
import commonHeader from './component/commonHeader.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      banner:{
      	list:[
      		{name:"p1"},
      		{name:"p2"},
      		{name:"p3"},
      		{name:"p4"},
      		{name:"p5"}
      	]
      }
    }
  },
  components: { commonHeader }
}
</script>

<style>
#app {
	min-width: 1200px;
	margin: 0 auto;
}
.banner {
	
}
</style>
