<template>
 <div class="right">
   <router-view></router-view>
 </div>
</template>

<script>
 export default {
   name:'componentsCenterRight',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.right{
  flex:1;
  overflow-y: auto;
  h3{
    height:700px;
  }
}

</style>
