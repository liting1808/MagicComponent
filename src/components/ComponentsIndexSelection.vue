<template>
<div class="bigBox">
  <components-selection-header></components-selection-header>
  <components-selection-center></components-selection-center>
</div>
</template>

<script>
import componentsSelectionHeader from './ComponentsSelectionHeader'
import componentsSelectionCenter from './ComponentsSelectionCenter'
 export default {
   name:'componentsIndexSelection',
   data () {
     return {

     }
   },
   components: {
      componentsSelectionHeader,
      componentsSelectionCenter
   }
 }
</script>

<style lang='scss' scoped>
.bigBox{
  height:100%;
  display: flex;
  flex-direction: column;
}

</style>
