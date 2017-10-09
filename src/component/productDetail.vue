<template>
	<div id="productDetail">
		<div class="product-detail-wrapper">
			<div class="product-detail-title-wrapper">
				<p class="product-detail-title">
					{{productTitle}}
				</p>
			</div>
			<!--<div class="product-detail-item product-detail-top" :style="styleTopObj">
				
			</div>
			<div class="product-detail-item product-detail-bottom" :style="styleBotObj">
				
			</div>-->
			<img v-for="item in imgList" :src="item.src"/>
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
    			productTitle:"产品展示>LED无影灯>整体反射式无影灯>整体反射吊式LED无影灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_10.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001001/zt01001001_pic_11.jpg')}
	    			
	    		]
    		}
    		,
    		"01001002":{
    			productTitle:"产品展示>LED无影灯>整体反射式无影灯>满天星吊式单头500D LED无影灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_10.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001002/zt01001002_pic_11.jpg')}
	    			
	    		]
    		}
    		,
    		"01001003":{
    			productTitle:"产品展示>LED无影灯>整体反射式无影灯>满天星吊式单头700D LED无影灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_10.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001003/zt01001003_pic_11.jpg')}
	    			
	    		]
    		}
    		,
    		"01001004":{
    			productTitle:"产品展示>LED无影灯>整体反射式无影灯>整体反射立式移动LED无影灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_10.jpg')},
	    			{src:require('../assets/productdetail/zt01001/zt01001004/zt01001004_pic_11.jpg')}
	    			
	    		]
    		}
    		,
    		"01002001":{
    			productTitle:"产品展示>LED无影灯>满天星LED无影灯>满天星吊式双头LED无影灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt01002/zt01002001/zt01002001_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002001/zt01002001_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002001/zt01002001_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002001/zt01002001_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002001/zt01002001_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002001/zt01002001_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002001/zt01002001_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002001/zt01002001_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002001/zt01002001_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002001/zt01002001_pic_10.jpg')}
	    			
	    		]
    		}
    		,
    		"01002002":{
    			productTitle:"产品展示>LED无影灯>满天星LED无影灯>满天星吊式单头500E LED无影灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_10.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002002/zt01002002_pic_11.jpg')}
	    			
	    		]
    		}
    		,
    		"01002003":{
    			productTitle:"产品展示>LED无影灯>满天星LED无影灯>满天星吊式单头700E LED无影灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_10.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002003/zt01002003_pic_11.jpg')}
	    		]
    		}
    		,
    		"01002004":{
    			productTitle:"产品展示>LED无影灯>满天星LED无影灯>满天星立式移动LED无影灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt01002/zt01002004/zt01002004_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002004/zt01002004_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002004/zt01002004_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002004/zt01002004_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002004/zt01002004_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002004/zt01002004_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002004/zt01002004_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002004/zt01002004_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002004/zt01002004_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt01002/zt01002004/zt01002004_pic_10.jpg')}
	    		]
    		}
    		,
    		"02001001":{
    			productTitle:"产品展示>LED观光灯>超薄液晶侧发光LED观光灯>超薄侧发光单联LED观光灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt02001/zt02001001/zt02001001_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001001/zt02001001_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001001/zt02001001_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001001/zt02001001_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001001/zt02001001_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001001/zt02001001_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001001/zt02001001_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001001/zt02001001_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001001/zt02001001_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001001/zt02001001_pic_10.jpg')}
	    		]
    		},
    		"02001002":{
    			productTitle:"产品展示>LED观光灯>超薄液晶侧发光LED观光灯>超薄侧发光双联LED观光灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt02001/zt02001002/zt02001002_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001002/zt02001002_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001002/zt02001002_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001002/zt02001002_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001002/zt02001002_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001002/zt02001002_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001002/zt02001002_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001002/zt02001002_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001002/zt02001002_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001002/zt02001002_pic_10.jpg')}
	    		]
    		},
    		"02001003":{
    			productTitle:"产品展示>LED观光灯>超薄液晶侧发光LED观光灯>超薄侧发光三联LED观光灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt02001/zt02001003/zt02001003_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001003/zt02001003_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001003/zt02001003_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001003/zt02001003_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001003/zt02001003_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001003/zt02001003_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001003/zt02001003_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001003/zt02001003_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001003/zt02001003_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001003/zt02001003_pic_10.jpg')}
	    		]
    		},
    		"02001004":{
    			productTitle:"产品展示>LED观光灯>超薄液晶侧发光LED观光灯>超薄侧发光四联LED观光灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt02001/zt02001004/zt02001004_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001004/zt02001004_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001004/zt02001004_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001004/zt02001004_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001004/zt02001004_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001004/zt02001004_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001004/zt02001004_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001004/zt02001004_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001004/zt02001004_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt02001/zt02001004/zt02001004_pic_10.jpg')}
	    		]
    		},
    		"02002001":{
    			productTitle:"产品展示>LED观光灯>超薄亮背发光LED观光灯>超高亮背发光单联LED观光灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_10.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002001/zt02002001_pic_11.jpg')}
	    		]
    		},
    		"02002002":{
    			productTitle:"产品展示>LED观光灯>超薄亮背发光LED观光灯>超高亮背发光双联LED观光灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_10.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002002/zt02002002_pic_11.jpg')}
	    		]
    		},
    		"02002003":{
    			productTitle:"产品展示>LED观光灯>超薄亮背发光LED观光灯>超高亮背发光三联LED观光灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_10.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002003/zt02002003_pic_11.jpg')}
	    		]
    		},
    		"02002004":{
    			productTitle:"产品展示>LED观光灯>超薄亮背发光LED观光灯>超高亮背发光四联LED观光灯",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_08.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_09.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_10.jpg')},
	    			{src:require('../assets/productdetail/zt02002/zt02002004/zt02002004_pic_11.jpg')}
	    		]
    		}
    		,
    		"03001001":{
    			productTitle:"产品展示>LED视力表>多功能LED视力表",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt03001/zt03001001/zt03001001_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt03001/zt03001001/zt03001001_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt03001/zt03001001/zt03001001_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt03001/zt03001001/zt03001001_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt03001/zt03001001/zt03001001_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt03001/zt03001001/zt03001001_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt03001/zt03001001/zt03001001_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt03001/zt03001001/zt03001001_pic_08.jpg')}
	    		]
    		}
    		,
    		"03002001":{
    			productTitle:"产品展示>LED视力表>普通LED视力表",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt03002/zt03002001/zt03002001_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt03002/zt03002001/zt03002001_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt03002/zt03002001/zt03002001_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt03002/zt03002001/zt03002001_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt03002/zt03002001/zt03002001_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt03002/zt03002001/zt03002001_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt03002/zt03002001/zt03002001_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt03002/zt03002001/zt03002001_pic_08.jpg')}
	    		]
    		}
    		,
    		"03004001":{
    			productTitle:"产品展示>LED视力表>多功能LED视力表",
	    		imgList:[
	    			{src:require('../assets/productdetail/zt03004/zt03004001/zt03004001_pic_01.jpg')},
	    			{src:require('../assets/productdetail/zt03004/zt03004001/zt03004001_pic_02.jpg')},
	    			{src:require('../assets/productdetail/zt03004/zt03004001/zt03004001_pic_03.jpg')},
	    			{src:require('../assets/productdetail/zt03004/zt03004001/zt03004001_pic_04.jpg')},
	    			{src:require('../assets/productdetail/zt03004/zt03004001/zt03004001_pic_05.jpg')},
	    			{src:require('../assets/productdetail/zt03004/zt03004001/zt03004001_pic_06.jpg')},
	    			{src:require('../assets/productdetail/zt03004/zt03004001/zt03004001_pic_07.jpg')},
	    			{src:require('../assets/productdetail/zt03004/zt03004001/zt03004001_pic_08.jpg')}
	    		]
    		}
    	},
    	imgList:[],
    	productTitle:"产品展示>LED无影灯>满天星LED无影灯>满天星吊式单头LED无影灯"
    }
  },
//components: { commonHeader },
	created:function(){
		var vm=this;
		var productVal=vm.$route.params.id;
		vm.productChange(productVal);
		eventbus.$on('routeChange',function(val){
			vm.productChange(val)
		})
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
		productChange(val){
			var vm = this;
			if(vm.productList[val]){
				vm.imgList=vm.productList[val].imgList;
				vm.productTitle=vm.productList[val].productTitle;
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
.product-detail-wrapper img {
	display: block;
	margin: 0 auto;
	width: 100%;
	max-width: 1600px;
	min-width: 1200px;
}
</style>