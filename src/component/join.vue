<template>
	<div id="join">
		<div class="join-wrapper">
			<div class="join-banner">
			</div>
			<div class="join-container">
				<table class="join-container-table" >
					<tr>
						<th>职位名称</th>
						<th>职位类别</th>
						<th>招聘人数</th>
						<th>工作地点</th>
						<th>发布时间</th>
					</tr>
					<tr>
						<td>电子研发工程师</td>
						<td>研发</td>
						<td>1</td>
						<td>长沙-雨花区</td>
						<td>2017-07-20</td>
					</tr>
					<tr>
						<td>医疗器械厂家娉销售精英</td>
						<td>销售</td>
						<td>2</td>
						<td>长沙-雨花区</td>
						<td>2017-06-29</td>
					</tr>
					<tr>
						<td>无责底薪3000+提成</td>
						<td>销售</td>
						<td>2</td>
						<td>长沙-雨花区</td>
						<td>2017-06-28</td>
					</tr>
					<tr>
						<td>电子厂普工长白班</td>
						<td>普工</td>
						<td>10</td>
						<td>长沙-雨花区</td>
						<td>2017-07-11</td>
					</tr>
				</table>
			</div>
		</div>
		
	</div>
	
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
//components: { commonHeader },
	created:function(){
	},
	methods:{
	}
  
}
</script>

<style>
#join {
	padding-top: 82px;
	min-width: 1200px;
	margin: 0 auto;
}
.join-banner {
	margin-bottom: 50px;
	height: 500px;
	background:url(../css/img/join/join-banner.jpg)  no-repeat center -200px;
}
.join-container {
	padding: 50px 0 100px;
	background-color: #fff;
}
.join-container-table {
	margin: 0 auto;
	width: 972px;
}
.join-container-table th {
	background-color: #e67917;
	color: #fff;
	border: 1px solid #000;
	line-height: 56px;
}
.join-container-table td {
	color: #000;
	line-height: 56px;
	border: 1px solid #000;
	text-align: center;
}
</style>