<template>
<div class="bigBox-install">
    <h3>Vue 案例</h3>
    <components-see></components-see>
    <case-vue></case-vue>
</div>
</template>

<script>
import componentsSee from '@/components/common/see'
import caseVue from '@/components/case/caseVue'

 export default {
   name:'componentsRightCase',
   data () {
     return {

     }
   },
   components: {
     componentsSee,
     caseVue
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
