<template>
<div class="bigBox-install">
    <h3>安装</h3>
    <components-see></components-see>
    <install-vue></install-vue>
</div>
</template>

<script>
import componentsSee from '@/components/common/see'
import installVue from '@/components/install/installVue'

 export default {
   name:'componentsRightInstall',
   data () {
     return {

     }
   },
   components: {
     componentsSee,
     installVue
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
