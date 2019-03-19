<template>
<div class="box-one">
    <ul>
      <li class="li1" ><a href="/#/components">开始使用</a></li>
      <li class="li2" ><a href="/#/components" class="imgA">GITHUB</a></li>
      <li class="li3" ><a href="/#/components">案例展示</a></li>
      <li class="li4" ><a href="/#/components">组件库</a></li>
    </ul>
</div>
</template>

<script>
 export default {
   name:'componentsIndexHeader',
   data () {
     return {

     }
   },
   components: {

   },
   methods:{
      tan1(){
        let li1 = document.querySelector(".li1");
        setInterval(function(){
          function getColor(){
          var str="#";
          for(var i=0;i<6;i++){
            str+=(parseInt(Math.random()*16)).toString(16);
          }
          return str;
        }

          li1.style.background=getColor();
},800)
      },
      tan2(){
        let li2 = document.querySelector(".li2");

        setInterval(function(){
          function getColor(){
          var str="#";
          for(var i=0;i<6;i++){
            str+=(parseInt(Math.random()*16)).toString(16);
          }
          return str;
        }


         li2.style.background=getColor();
        },700)
      },
      tan3(){
        let li3 = document.querySelector(".li3");

        setInterval(function(){

          function getColor(){
            var str="#";
            for(var i=0;i<6;i++){
              str+=(parseInt(Math.random()*16)).toString(16);
            }
            return str;
          }
         li3.style.background=getColor();

        },700);

      },
      tan4(){
        let li4 = document.querySelector(".li4");

        setInterval(function(){

          function getColor(){
            var str="#";
            for(var i=0;i<6;i++){
              str+=(parseInt(Math.random()*16)).toString(16);
            }
            return str;
          }
         li4.style.background=getColor();

        },600);
      }

   },
   mounted(){
     this.tan1();
     this.tan2();
     this.tan3();
     this.tan4();
   }
 }
</script>

<style lang='scss' scoped>
.box-one{
  width:100%;
  height:100%;
  position: relative;
  overflow: hidden;
    ul{
      width:100%;
      height:100%;
      display: flex;
      li{
        width:150px;
        height:50px;
        border-radius: 25px;
        background:#eee;
        margin-right: 10px;
        text-align: center;
        margin-bottom:20px;
        position: absolute;
        left:100px;
        top:100px;
        a{
          font-size: 20px;
          line-height: 50px;
          color:white;
        }
        .imgA{
          background:url(../assets/img/git.png) no-repeat;
          background-size: 34px 34px;
          background-position: 12px 8px;
          padding-left:25px;
        }
      }
      li:hover{
        a{
          font-weight: 600;
        }
      }
      .li1{
        left:20%;
        top:60%;
      }
      .li2{
        left:37%;
        top:60%;
      }
      .li3{
        left:52%;
        top:60%;
      }
      .li4{
        left:70%;
        top:60%;
      }
    }
}

</style>
