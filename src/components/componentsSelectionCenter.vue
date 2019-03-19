<template>
<div class="center">
    <components-center-left></components-center-left>
    <components-center-right></components-center-right>

</div>
</template>

<script>
import componentsCenterLeft from '@/components/index/ComponentsCenterLeft'
import componentsCenterRight from '@/components/index/ComponentsCenterRight'
 export default {
   name:'componentsSelectionCenter',
   data () {
     return {

     }
   },
   components: {
     componentsCenterLeft,
     componentsCenterRight
   }
 }
</script>

<style lang='scss' scoped>
.center{
  height:100%;
  width:100%;
  flex:1;
  overflow-y: auto;
  display: flex;

}

</style>
