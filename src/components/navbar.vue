<template>
	
	<div id="navbar">
		<div class="left">
			<slot></slot>
			<span>{{datatitle}}</span>
		</div>
		<div class="right">
			<span>大连</span>
			<i class="iconfont icon-account"></i>
		</div>
	</div>
</template>
<script>
import bus from '../components/bus.vue'
	export default{
		name:"navbar",
		data(){
			return {
				datatitle:"卖座电影",
				datamain:location.hash

			}
		},
		methods:{

		},
		mounted(){
				bus.$on('event',(evt)=>{
					this.datatitle = evt;
				})
		}
	}

</script>
<style scoped lang="scss">
	#navbar{width:100%;height:1rem;background:black;position:fixed;top:0;left:0;line-height: 1rem;color:white;z-index: 10;
		.left{float:left;padding-left:0.1rem;}
		.right{float:right;padding-right:0.1rem;}
		i{padding:0.1rem;}
	}
</style>