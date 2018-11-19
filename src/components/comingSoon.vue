<template>
	<div id="comingSoon">
		<ul>
			<li v-for="data in dataList" class="clear" @click="handle(data.id)">
				<img :src="data.cover.origin" alt="" class="l">
				<div class="l div1">
					<p class="p1">
						<span>{{data.name}}</span>
					</p>
					<p>
						{{data.intro}}
					</p>
					<p class="p2">
						<span>
							{{new Date(data.premiereAt).getMonth()+'月'+new Date(data.premiereAt).getDate()+'日上映'}}
						</span>
						<span>
							{{'星期'+day[new Date(data.premiereAt).getDay()]}}
						</span>
					</p>
					
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		name:'comingSoon',
		data(){
			return {
				dataList:[],
				day:['日','一','二','三','四','五','六'],
				page:1
			}
		},
		mounted(){
			axios.get('/v4/api/film/coming-soon?page='+this.page+'&count=7').then(res=>{
				this.dataList = res.data.data.films;
				this.page++;
				if(this.page>res.data.data.page.total){
					this.page = res.data.data.page.total;
				}
			}).then(error=>{
				console.log(error);
			})
		},
		methods:{
			handle(id){
				this.$router.push('/detail/'+id);
			}
		}
	}
</script>
<style scoped lang="scss">
	#comingSoon{
		img{width:1rem;height:100%;}
		li{padding:0.3rem 0.3rem 0.3rem 0;border-bottom:1px dashed black;line-height: 0.7rem;height:2rem;
			.p1{font-size:0.30rem;font-weight: bold;}
			.p2{color:orange;
				span{margin-right:0.5rem;}
			}
			.div1{margin-left:0.3rem;width:80%;}
		}
	}
</style>