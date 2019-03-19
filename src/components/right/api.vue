<template>
<div class="bigBox-install">
    <h3>API</h3>
    <components-see></components-see>
    <api-vue></api-vue>
</div>
</template>

<script>
import componentsSee from '@/components/common/see'
import apiVue from '@/components/api/apiVue'

 export default {
   name:'componentsRightApi',
   data () {
     return {

     }
   },
   components: {
     componentsSee,
     apiVue
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
