<template>
  <div id="app">
  	<commonHeader></commonHeader>
		<router-view class="view"></router-view>
		<commonFooter></commonFooter>
  </div>
</template>

<script>
import commonHeader from './component/commonHeader.vue';
import commonFooter from './component/commonFooter.vue';
export default {
  name: 'app',
  components: { commonHeader ,commonFooter}
}
</script>

