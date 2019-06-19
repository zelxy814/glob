<template>
  <div id="app">
  <HeaderTop/>
  <router-view/>
  </div>
</template>

<script>
import HeaderTop from "./components/HeaderTop"
export default {
  name: 'app',
  components:{
    HeaderTop
  }
}
</script>

<style scoped>

</style>



