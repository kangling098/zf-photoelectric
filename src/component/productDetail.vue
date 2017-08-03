<template>
	<div id="productDetail">
		<div class="product-detail-wrapper">
			<div class="product-detail-title-wrapper">
				<p class="product-detail-title">
					{{productTitle}}
				</p>
			</div>
			<div class="product-detail-item product-detail-top" :style="styleTopObj">
				
			</div>
			<div class="product-detail-item product-detail-bottom" :style="styleBotObj">
				
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	productList:{
    		"01001001":{
    			topUrl:require('../assets/productdetail/zt01001/zt01-top-001.jpg'),
    			botUrl:require('../assets/productdetail/zt01001/zt01-bot-001.jpg'),
    			title:"产品展示>LED无影灯>满天星LED无影灯>满天星吊式单头LED无影灯"
    		},
    		"01001002":{
    			topUrl:require('../assets/productdetail/zt01001/zt01-top-002.jpg'),
    			botUrl:require('../assets/productdetail/zt01001/zt01-bot-002.jpg'),
    			title:"产品展示>LED无影灯>满天星LED无影灯>满天星吊式单头LED无影灯"
    		},
    		"01001003":{
    			topUrl:require('../assets/productdetail/zt01001/zt01-top-003.jpg'),
    			botUrl:require('../assets/productdetail/zt01001/zt01-bot-003.jpg'),
    			title:"产品展示>LED无影灯>满天星LED无影灯>满天星吊式单头LED无影灯"
    		},
    		"01001004":{
    			topUrl:require('../assets/productdetail/zt01001/zt01-top-004.jpg'),
    			botUrl:require('../assets/productdetail/zt01001/zt01-bot-004.jpg'),
    			title:"产品展示>LED无影灯>满天星LED无影灯>满天星吊式单头LED无影灯"
    		}
    	},
    	styleTopObj:{
    		 background: ''
    	},
    	styleBotObj:{
    		 background: ''
    	},
    	productTitle:"产品展示>LED无影灯>满天星LED无影灯>满天星吊式单头LED无影灯"
    }
  },
//components: { commonHeader },
	created:function(){
		var vm=this;
		var hash=location.hash.replace("#","");
		if(vm.productList[hash]){
			vm.styleTopObj.background='url('+vm.productList[hash].topUrl+') no-repeat center';
			vm.styleBotObj.background='url('+vm.productList[hash].botUrl+') no-repeat center';
		}else {
			alert("不存在该商品")
		}
		
		//hash改变事件
		window.onhashchange = function() {
			vm.peoductChange()
		};
	},
	methods:{
		//控制显示哪一个关于兆丰模块
		aboutChoose(index){
			var vm = this;
			for(let i=0;i<3;i++){
				vm.aboutPageList['item'+(i+1)]=false;
			}
			vm.aboutPageList['item'+index]=true;
		},
		peoductChange(){
			
			var vm=this;
			var hash=location.hash.replace("#","");
			if(vm.productList[hash]){
				vm.styleTopObj.background='url('+vm.productList[hash].topUrl+') no-repeat center';
				vm.styleBotObj.background='url('+vm.productList[hash].botUrl+') no-repeat center';
			}else {
				alert("不存在该商品")
			}
			
		}
	}
  
}
</script>

<style>
.product-detail-wrapper {
	padding-top: 82px;
	min-width: 1200px;
	margin: 0 auto;
}
.product-detail-title-wrapper {
	margin-bottom: 20px;
	height: 60px;
	background-color: #8a8988;
}
.product-detail-title {
	margin: 0 auto;
	width: 970px;
	line-height: 60px;
	font-size: 20px;
	color: #fff;
}
.product-detail-top {
	width: 100%;
	height: 630px;
	background-color: #ccc;
}
.product-detail-bottom {
	width: 100%;
	height: 1050px;
	background-color: #009FD9;
}
</style>