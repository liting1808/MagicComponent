<template>
 <div class="install_one">
    <code>
      后台管理系统
      <a href="javascript:;">点击查看</a>
    </code>
  </div>
</template>

<script>
 export default {
   name:'componentsSee',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.install_one{
    margin-top:20px;
    code{
      // width:70%;
      // height:150px;
      font-size: 16px;
      color:gray;
      // background:white;
      // display: flex;
      // border-left:5px solid burlywood;
      // border-right:5px solid burlywood;
      // border-radius: 10px;
      // padding:20px;
      align-items: center;
      a{
        font-size: 16px;
        color:black;
        padding:5px 20px;
        border-radius: 10px;
        background:rgb(164, 190, 247);
        margin-left:15px;
      }
      a:hover{
        color:blueviolet;
      }
    }
}

</style>
