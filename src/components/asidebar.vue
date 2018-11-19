<template>
	<transition name="bounce">
	<aside id="asidebar">
		<ul @click="handleclick()">
			<router-link to="/home" tag="li" active-class="active">首页</router-link>
			<router-link to="/film" tag="li" active-class="active">影片</router-link>
			<router-link to="/cinema" tag="li" active-class="active">影院</router-link>
			<router-link to="/login" tag="li" active-class="active">我的</router-link>
			<router-link to="/card" tag="li" active-class="active">卡片</router-link>

		</ul>
	</aside>
	</transition>
</template>
<script>
	export default{
		name:"asidebar",
		data(){
			return {

			}
		},
		methods:{
			handleclick(){
				this.$emit('event');
			}
		}
	}
</script>
<style scoped lang="scss">
	#asidebar{
	width:2rem;height:100%;background: black;color:white;position:fixed;z-index:10;
	li{text-align: center;padding:0.2rem 0rem;}
	.active{
		background:red;
	}
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateX(-100%);
    /*自身的100%*/
    opacity: 0;
  }
  
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>