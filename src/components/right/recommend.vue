<template>
<div class="bigBox-install">
    <h3>介绍</h3>
    <components-see></components-see>
    <recommend-vue></recommend-vue>
</div>
</template>

<script>
import componentsSee from '@/components/common/see'
import recommendVue from '@/components/recommend/recommendVue'

 export default {
   name:'componentsRightRecommend',
   data () {
     return {

     }
   },
   components: {
     componentsSee,
     recommendVue
   }
 }
</script>

<style lang='scss' scoped>
.bigBox-install{
  height:100%;
  width:80%;
  margin:40px;
  h3{
    font-size: 36px;
    color:gray;
    padding-left:20px;
  }

}

</style>
