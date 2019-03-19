<template>
 <div class="bigBox">
    <div class="box">
        <components-index-header></components-index-header>
    </div>
 </div>
</template>

<script>
import componentsIndexHeader from '@/components/ComponentsIndexHeader'
 export default {
   name:'index',
   data () {
     return {
     }
   },
   components: {
     componentsIndexHeader
   }
 }
</script>

<style lang='scss' scoped>
.bigBox{
  height:100%;
  height:100%;
  background: linear-gradient(to right,gray ,#eee,#eee,gray);
  .box{
    height:100%;
    width:100%;
    background:url(../assets/img/1552655378_735584.png) no-repeat;
    background-position: 300px 100px;
  }
}
</style>
