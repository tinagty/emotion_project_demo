<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
import rightTopNav from '@/components/common/rightTopNav'
import rightButtomNav from '@/components/common/rightButtomNav'
export default {
  name: 'App',
  components:{
    leftNav,
    rightTopNav,
    rightButtomNav
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  padding: 0;
  /*border-style:solid;*/
}

</style>
