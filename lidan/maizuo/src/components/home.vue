<template>
	<div id="home">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div v-for="data,index in dataList" class="swiper-slide" v-swiper="index">
		      	<img :src="data.cover.origin" alt="">
		      </div>
		    </div>
		    <!-- Add Pagination -->
		    <div class="swiper-pagination"></div>
		</div>
		<ul>
			<router-link v-for="data in dataList" tag="li" :to="'/detail/'+data.id">
				<img :src="data.cover.origin" alt="">
				<div class="clear contain">
					<div class="l">
						<p>{{data.name}}</p>
						<p>
							<span>{{data.cinemaCount}}家影院上映</span>
							<span>{{data.watchCount}}人购票</span>
						</p>
					</div>
					<div class="r pingfen">{{data.grade}}</div>
				</div>
			</router-link>
		</ul>
		<div class="div1" @click="handle()">更多热映电影</div>
		<div class="hrr">
			<div class="div2">即将上映</div>
			<ul>
				<li v-for="data in dataArr">
					<img :src="data.cover.origin" alt="">
					<div class="coming">
						<span class="l span1">{{data.name}}</span>
						<span class="r span2">{{new Date(data.premiereAt).getMonth()+'月'+new Date(data.premiereAt).getDate()+'日'+'上映'}}</span>
					</div>
				</li>
			</ul>
			<div class="div3" @click="handle2()">
				更多即将上映电影
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios"
import Vue from 'vue'
import Swiper from 'swiper'
Vue.directive('swiper',{
	inserted(el,binding,vnode){
		if(binding.value===vnode.context.dataList.length-1){
			new Swiper('.swiper-container', {
			      slidesPerView: 1,
			      spaceBetween: 30,
			      loop: true,
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			      },
			      autoplay: {
			             delay: 2500,
			             disableOnInteraction: false,
			      },
			    });
			
		}
	}
})
	export default{
		name:'home',
		data(){
			return {
				dataList:[],
				dataArr:[]
			}
		},
		mounted(){
			axios.get("/v4/api/film/now-playing?__t=1542357700933&page=1&count=10").then(res=>{
				console.log(res);
				this.dataList = res.data.data.films;
				
			}).catch(error=>{
				console.log(error)
			}),
			axios.get('/v4/api/film/coming-soon?__t=1542432931805&page=1&count=3').then(res=>{
				this.dataArr = res.data.data.films
			})
		},
		methods:{
			handle(){
				location.hash = '/film/now-playing'
			},
			handle2(){
				location.hash = '/film/coming-soon'
			}
		}
	}
</script>
<style scoped lang="scss">
	#home{
		img{width:100%;}
		ul{margin:0 0.3rem;}
		li{border:1px solid black;margin:0.3rem 0;
			.contain{height:0.8rem;padding:0.1rem 0.3rem;background: white;}
			.pingfen{
				color:red;
				font-size: 0.24rem;
				line-height: 0.8rem;
			}
		}
		.div1{width:2.5rem;height:0.8rem;border-radius:0.5rem;text-align: center;line-height: 0.8rem;border:1px solid black;position:relative;left:50%;transform:translateX(-50%);margin-bottom:0.9rem;}
		.hrr{border-top:1px solid black;position:relative;
			.div2{width:1.2rem;height:0.5rem;text-align: center;line-height: 0.5rem;position:absolute;border-radius: 0.1rem;background: grey;left:50%;transform:translate(-50%,-50%);color:white;}
			.coming{height:1rem;line-height: 1rem;font-size: 0.20rem;padding:0 0.1rem;background: white;
				.span2{color:orange;}
			}
		}
		.div3{padding:0.2rem;border:1px solid black;width:2.5rem;height:0.8rem;text-align: center;line-height: 0.8rem;border-radius:0.8rem;position:relative;left:50%;transform:translateX(-50%); }
	}
</style>