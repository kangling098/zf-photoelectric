<template>
  <div id="app">
  	<commonHeader></commonHeader>
    <div class="banner">
    	<div class="banner-center">
    		<ul class="banner-nav">
	    		<template v-for="(item,index) in banner.list">
	    			<li class="banner-item" @click="bannerChoose(index)" >{{index}}</li>
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
    	num:"",
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
  components: { commonHeader },
  
	methods:{
		bannerChoose(index){
			var vm = this;
			vm.num=index;
		}
		
	}
  
}
</script>

<style>
#app {
	min-width: 1200px;
	margin: 0 auto;
}
.banner {
	width: 100%;
	height: 577px;
	background: url(/src/css/img/banner-bg-1.jpg) no-repeat center #eee5dc;
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
</style>
