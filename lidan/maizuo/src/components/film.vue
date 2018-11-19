<template>
	<div id="film">
		<div class="div1">
			<router-link tag="div" to="/film/now-playing" active-class="active">正在上映</router-link>
			<router-link tag="div" to="/film/coming-soon" active-class="active">即将上映</router-link>
			
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import router from '../router/index.js'
	export default{
		name:'film',
		data(){
			return {

			}
		}
	}
</script>
<style scoped lang="scss">
	#film{
		padding:0 0.3rem;
		.div1{
			display:flex;border-bottom:1px solid orange;font-size: 0.3rem;
			div{flex:1;text-align: center;height:0.8rem;line-height: 0.8rem;}
		}
	}
	.active{border-bottom:4px solid orange;color:orange;}
</style>