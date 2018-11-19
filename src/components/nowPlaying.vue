<template>
	<div id="nowplaying">
		<ul>
			<li v-for="data in dataList" class="clear" @click="handleDetail(data.id)" :key="data.id">
				<img :src="data.cover.origin" alt="" class="l">
				<div class="l div1">
					<p class="clear p1">
						<span class="l">{{data.name}}</span>
						<span class="r span1">{{data.grade}}</span>
					</p>
					<p>{{data.intro}}</p>
					<p>
						<span>{{data.cinemaCount}}家影院上映</span>
						<span>{{data.watchCount}}人购票</span>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		name:'nowplaying',
		data(){
			return {
				dataList:[]
			}
		},
		methods:{
			handleDetail(id){
				this.$router.push('/detail/'+id);
			}
		},
		mounted(){
			axios.get('/v4/api/film/now-playing?page=1&count=7').then(res=>{
				console.log(res);
				this.dataList = res.data.data.films;
			}).catch(error=>{
				console.log(error);
			})
		}
	}
</script>
<style scoped lang="scss">
	#nowplaying{
		img{width:1rem;height:100%;}
		li{padding:0.3rem 0.3rem 0.3rem 0;border-bottom:1px dashed black;line-height: 0.7rem;height:2rem;
			.p1{font-size:0.30rem;font-weight: bold;
				.span1{color:orange;}
				
			}
			.div1{margin-left:0.3rem;width:80%;}
		}
	}
</style>