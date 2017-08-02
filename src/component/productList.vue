<template>
	<div id="productList">
		<div class="product-list-wrapper">
			<div class="product-list-title-wrapper">
				<p class="product-list-title">
					{{pageTitle}}
				</p>
			</div>
			<div class="product-list-content-wrapper">
				<div class="product-list-content content clearfix">
					<a v-for="item in pageListArr" class="product-list-item-a" :href="item.linkSrc">
						<img :src="item.imgUrl"/>
						<span class="product-list-item-name">
							{{item.name}}
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	pageTitle:"产品展示>LED无影灯",
    	pageListArr:[],
    	productList:{
    		"01":{
    			title:"产品展示>LED无影灯",
    			listArr:[
	    			{
		    			imgUrl:require('../assets/productlist/wuyingdeng/wuying001.jpg'),
		    			name:'整体反射式无影灯',
		    			linkSrc:"/product/list#01001"
	    			},
	    			{
		    			imgUrl:require('../assets/productlist/wuyingdeng/wuying002.jpg'),
		    			name:'满天星LED无影灯',
		    			linkSrc:"/product/list#01002"
	    			},
	    			{
		    			imgUrl:require('../assets/productlist/wuyingdeng/wuying001.jpg'),
		    			name:'移动式LED无影灯',
		    			linkSrc:"/product/list#01003"
	    			},
	    			{
		    			imgUrl:require('../assets/productlist/wuyingdeng/wuying001.jpg'),
		    			name:'LED无影灯发光引擎',
		    			linkSrc:"/product/list#01004"
	    			}
    			]
    		},
    		"01001":{
    			title:"产品展示>LED无影灯"
    		}
    	},
    	styleTopObj:{
    		 background: 'url('+require('../assets/productdetail/top-001.jpg')+') no-repeat center'
    	},
    	styleBotObj:{
    		 background: 'url('+require('../assets/productdetail/bot-001.jpg')+') no-repeat center'
    	},
    	productTitle:"产品展示>LED无影灯>满天星LED无影灯>满天星吊式单头LED无影灯"
    }
  },
//components: { commonHeader },
	created:function(){
		var vm=this;
		var hash=location.hash.replace("#","");
		vm.pageListArr=vm.productList[hash].listArr;
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
				vm.pageListArr=vm.productList[hash].listArr;
			}else {
				alert("不存在该商品")
			}
			
		}
	}
  
}
</script>

<style>
.product-list-wrapper {
	padding-top: 82px;
	min-width: 1200px;
	margin: 0 auto;
}
.product-list-title-wrapper {
	margin-bottom: 20px;
	height: 60px;
	background-color: #8a8988;
}
.product-list-title {
	margin: 0 auto;
	width: 970px;
	line-height: 60px;
	font-size: 20px;
	color: #fff;
}
.product-list-content-wrapper {
	margin: 0 auto;
	width: 1200px;
	padding: 60px 120px 0;
}
.product-list-item-a {
	float: left;
	margin: 0 70px 60px 0;
	width: 275px;
	height: 210px;
}
.product-list-item-a img {
	width: 275px;
	height: 170px;
}
.product-list-item-name {
	display: block;
	line-height: 24px;
	margin-top: 10px;
	margin-left: 10px;
	border-left: 1px solid #333333;
	font-size: 14px;
	color: #333;
	text-indent: 26px;
}
</style>