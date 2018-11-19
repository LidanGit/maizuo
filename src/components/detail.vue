<template>
	<div v-if="datainner" id="detail">
		<img :src="datainner.cover.origin" alt="">
		<div>
			<h4>影片简介</h4>
			<p>导演:{{datainner.director}}</p>
			<p>主演:<span v-for="data in datainner.actors">{{data.name}}|</span></p>
			<p>地区语言:{{datainner.nation}}</p>
			<p>类型:{{datainner.category}}</p>
			<p>上映日期:{{new Date(datainner.premiereAt).getMonth()+'月'+new Date(datainner.premiereAt).getDate()+'日上映'}}</p>
			<p>{{datainner.synopsis}}</p>
		</div>
	</div>
</template>
<script>
import bus from '../components/bus.vue'
	export default{
		name:"detail",
		data(){
			return {
				datainner:null
			}
		},
		mounted(){
			//在页面全部加载完成之后，获取渠道的id值
			// console.log(this.$route.params.id)
			fetch(`/v4/api/film/${this.$route.params.id}?__t=1542618340830`).then(res=>{
				return res.json();
			}).then(res=>{
				console.log(res.data.film);
				this.datainner = res.data.film;
				bus.$emit('event',res.data.film.name);
			}).catch(error=>{
				console.log(error);
			})
		}
	}
</script>
<style scoped lang="scss">
	#detail{
		img{
			width:100%;
		}
	}
</style>