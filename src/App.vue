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

