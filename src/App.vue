<template>
  <v-app id="inspire">
    <WebBar></WebBar>
    <router-view></router-view><!--내가 관심있는 팟 모든팟 뿌려줌-->
    <WebFooter></WebFooter>
  </v-app>
</template>

<script>
import WebBar from './components/WebBar.vue';
import WebFooter from './components/WebFooter.vue';


export default {
  components: {
    'WebBar':WebBar,
    'WebFooter': WebFooter,
  }
}

</script>`

<style scoped>
.me-2 {
  font-size: 15px;
  font-weight: bold;
  color:black;
  height:40;
  variant:flat;
  width:80px;
}
.text-right {
  right:1000px;
  
}


</style>