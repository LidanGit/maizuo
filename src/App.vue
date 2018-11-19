<template>
  <div id="app">
    <navbar>
      <i class="iconfont icon-category" @click="isShow=!isShow"></i>
    </navbar>
    <asidebar v-show="isShow" @event="isShow=!isShow">
    </asidebar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import asidebar from './components/asidebar.vue'
export default {
  name: 'App',
  data(){
    return {
        isShow:false
    }
  },
  methods:{

  },
  components:{
    navbar,
    asidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 1rem;
}
html{
  font-size:2.6667rem;
  height:100%;
}
body{
  font-size: 0.16rem;
  height:100%;
  background: #f1f1f1;
}
*{margin:0;padding:0;}
ul{list-style:none;}
img{display:block;}
a{text-decoration: none;color:black;}
.l{float:left;}
.r{float:right;}
.clear:after{content:"";display:block;clear:both;}
section{position:relative;}
</style>
